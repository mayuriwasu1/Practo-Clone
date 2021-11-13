// var dob_value=document.getElementById("dob_val").value;
// var DOB_err = document.getElementById("DOBerror_msg");
// if(dob_value<10){
//     console.log("yes")
//     DOB_err.textContent ="No";
// }
// else{
//     DOB_err.textContent = "Patient age cannot be less than 10 years";
// }
// var patname = document.getElementById("patname_input").value;
// var patname_err = document.getElementById("patname_err");
// if(patname.length=2){
//     patname_err.textContent="Required";
// }
// else if (patname.length = 0){
//   patname_err.textContent = " ";
// }

 window.addEventListener("load", (event) => {
var cart=JSON.parse(localStorage.getItem("cartitems"))||[];
 displaypop(cart);
 });
 function displaypop(cart){
  var cart = JSON.parse(localStorage.getItem("cartitems"))||[];
    var cartitem_div = document.getElementById("cartitem_div");
    cartitem_div.innerHTML="";
    cart.map(function (item) {
    var item_maindiv = document.createElement("div");
    item_maindiv.setAttribute("class", "item_maindiv");
    var item_pricediv = document.createElement("div");
    item_pricediv.setAttribute("class", "item_pricediv");
    var itemname = document.createElement("div");
    itemname.setAttribute("class", "itemname");
    itemname.textContent = item.name;
    var itemprice = document.createElement("div");
    itemprice.setAttribute("class", "itemprice");
    itemprice.textContent = "₹" + " " + item.price;
    var logo_div = document.createElement("div");
    logo_div.setAttribute("id", "logo_div");
    var logo_div_img = document.createElement("img");
    logo_div_img.setAttribute(
      "src",
      "https://prod-dx.s3.amazonaws.com/dx/labs/Practo_Labs.png"
    );
    var logo_div_txt = document.createElement("div");
    logo_div_txt.textContent = "By Practo Labs";
    logo_div.append(logo_div_img, logo_div_txt);
    item_pricediv.append(itemname, itemprice);
    item_maindiv.append(item_pricediv, logo_div);
    var cartitem_div = document.getElementById("cartitem_div");
    cartitem_div.append(item_maindiv);
    var testnum = document.getElementById("test_num");
    testnum.textContent = cart.length + " " + "Test";
    });

    var totalamount=cart.reduce(function(acc,cv) {
     return acc+Number(cv.price);        
    },0)
  var total = document.getElementById("totalamnt_amt");
  total.textContent="₹"+" "+(totalamount+150);
 
 }
 var continuebtn = document.getElementById("continuebtn");
 continuebtn.addEventListener("click",continuePage)
 function continuePage(){
     window.location.href="payment.html"
 }
