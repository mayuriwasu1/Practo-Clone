var slider_sec3_data = [
  {
    name: "COVID RTPCR",
    price: 800,
    button: document.getElementById("sec3_adddiv_1"),
  },
  {
    name: "Fasting Blood Sugar",
    price: 150,
    button: document.getElementById("sec3_adddiv_2"),
  },
  {
    name: "Beta HCE",
    price: 294,
    button: document.getElementById("sec3_adddiv_3"),
  },
  {
    name: "Vitamin B12",
    price: 490,
    button: document.getElementById("sec3_adddiv_4"),
  },
  {
    name: "Hba1C",
    price: 270,
    button: document.getElementById("sec3_adddiv_5"),
  },
  {
    name: "Liver Function Test",
    price: 560,
    button: document.getElementById("sec3_adddiv_6"),
  },
  {
    name: "Lipid Profile",
    price: 434,
    button: document.getElementById("sec3_adddiv_7"),
  },
  {
    name: "Complete Blood Count",
    price: 300,
    button: document.getElementById("sec3_adddiv_8"),
  },
  {
    name: "Thyroid Profile",
    price: 400,
    button: document.getElementById("sec3_adddiv_9"),
  },
];


  
  
    
var prodarr = JSON.parse(localStorage.getItem("cartitems")) || [];
var cartdiv= document.querySelector("#cartdiv");
var cartbutton=document.querySelector("#cart");

 slider_sec3_data.map(function (item) {
   item.button.addEventListener("click", function () {
     displayItems();
     addCart(item);
   });
   
   function addCart(item) {
     var prodarr = JSON.parse(localStorage.getItem("cartitems")) || [];
     console.log("working");
     prodarr.push(item);
     localStorage.setItem("cartitems", JSON.stringify(prodarr));
   }
   cartbutton.addEventListener("click", displayItems);
   function displayItems() {
     console.log("workin");

     var maindiv = document.createElement("div");
     maindiv.setAttribute("id", "cartbtn_maindiv");
     cartdiv.append(maindiv);
     var head = document.createElement("div");
     head.setAttribute("id", "carthead");
     var title_head = document.createElement("div");
     title_head.setAttribute("id", "title_head");
     var your_cart = document.createElement("span");
     your_cart.setAttribute("id", "your_cart");
     your_cart.textContent = "Your Cart";
     var test_num = document.createElement("span");
     test_num.setAttribute("id", "test_num");
     test_num.textContent = prodarr.length + " " + "Test";
     title_head.append(your_cart, test_num);
     var cartitem_div = document.createElement("div");
     cartitem_div.setAttribute("id", "cartitem_div");
     var item_logodiv = document.createElement("div");
     item_logodiv.setAttribute("id", "item_logodiv");
     var item_pricediv = document.createElement("div");
     item_pricediv.setAttribute("id", "item_pricediv");
     var itemname = document.createElement("div");
     itemname.setAttribute("id", "itemname");
     itemname.textContent = item.name;
     var itemprice = document.createElement("div");
     itemprice.setAttribute("id", "itemprice");
     itemprice.textContent = item.price;

     item_pricediv.append(itemname, itemprice);
     item_logodiv.append(item_pricediv);
     cartitem_div.append(item_logodiv);
     head.append(title_head);
     maindiv.append(head, cartitem_div);
   }
 });






// <!-- SLIDER 1 J QUERY -->
$("#slider_sec3").slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 800,
  prevArrow: '<i class="fas fa-chevron-left    slid3_left-arrow" ></i>',
  nextArrow: '<i class="fas fa-chevron-right   slid3_right-arrow"></i>',
});

// <!-- SLIDER 2 J QUERY -->

$("#slider_sec4").slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 800,
  prevArrow: '<i class="fas fa-chevron-left    slid4_left-arrow" ></i>',
  nextArrow: '<i class="fas fa-chevron-right   slid4_right-arrow"></i>',
});

// <!-- SLIDER 3 J QUERY -->

$("#slider_sec7").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  prevArrow: '<i class="fas fa-chevron-left    slid7_left-arrow" ></i>',
  nextArrow: '<i class="fas fa-chevron-right   slid7_right-arrow"></i>',
});

// <!-- SLIDER 4 J QUERY -->

$("#sec11_slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1200,
  arrows: false,
});

// <!-- SLIDER 5 J QUERY -->

$(".sec5_slider").slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 800,
  prevArrow: '<i class="fas fa-chevron-left    slid5_left-arrow" ></i>',
  nextArrow: '<i class="fas fa-chevron-right   slid5_right-arrow"></i>',
});
