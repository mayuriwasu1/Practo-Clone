var card = document.getElementById("card");
var cvv = document.getElementById("cvv");
var submit = document.querySelector("form");
  document.getElementById("orderpopup").style.display = "none";
submit.addEventListener("submit", orderplcd);
function orderplcd(e) {
  e.preventDefault();
  if (card.value.length == 10 && cvv.value.length == 3) {
        document.getElementById("orderpopup").style.display = "block";
  } else {
    alert("Error");
  }
}
