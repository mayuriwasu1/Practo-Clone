var cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
function addcart(item, amt) {
  var obj = {
    name: item,
    price: amt,
  };
  cartarr.push(obj);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));
  displaypop(cartarr);
}
var cartbutton = document.querySelector("#cart");
cartbutton.addEventListener("click", function () {
  displaypop(cartarr);
});
var cartcount = 0;

function displaypop(cartarr) {
  document.getElementById("cartpop").style.display = "block";
  var cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
  var cartitem_div = document.getElementById("cartitem_div");
  cartitem_div.innerHTML = "";

  cartarr.map(function (item) {
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
      "./images/Practo_Labs (1).png"
    );
    var logo_div_txt = document.createElement("div");
    logo_div_txt.textContent = "By Practo Labs";
    logo_div.append(logo_div_img, logo_div_txt);
    item_pricediv.append(itemname, itemprice);
    item_maindiv.append(item_pricediv, logo_div);
    cartitem_div.append(item_maindiv);
    var testnum = document.getElementById("test_num");
    testnum.textContent = cartarr.length + " " + "Test";
  });
  var totalamount = cartarr.reduce(function (acc, cv) {
    return acc + Number(cv.price);
  }, 0);

  var total = document.getElementById("totalamnt_amt");
  total.textContent = "₹" + " " + (totalamount + 150);

  cartcount++;
  if (cartcount % 2 != 1) {
    document.getElementById("cartpop").style.display = "none";
  }
}
window.addEventListener("load", (event) => {
  document.getElementById("cartpop").style.display = "none";
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
