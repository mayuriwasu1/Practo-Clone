
 var cart = JSON.parse(localStorage.getItem("cartitems")) || [];
 
 window.addEventListener("load", (event) => {
 displaypop(cart);
 });
             //displaying cart items and appending
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
    itemprice.textContent = "₹"+" "+item.price;
    var logo_div = document.createElement("div");
    logo_div.setAttribute("id", "logo_div");
    var logo_div_img = document.createElement("img");
    logo_div_img.setAttribute(
      "src",
      "./images/Practo_Labs (1).png"
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
