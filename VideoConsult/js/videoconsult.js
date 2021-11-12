var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 5;
var count6 = 0;
var openfaq1 = document.querySelector("#openfaq1");
var openfaq2 = document.querySelector("#openfaq2");
var openfaq3 = document.querySelector("#openfaq3");
var openfaq4 = document.querySelector("#openfaq4");
var openfaq5 = document.querySelector("#openfaq5");
var openfaq6 = document.querySelector("#openfaq6");
// var span1 = document.querySelector("#openfaq1>span");
// var span2 = document.querySelector("#openfaq2>span");
// var span3 = document.querySelector("#openfaq3>span");
// var span4 = document.querySelector("#openfaq>span");
// var span5 = document.querySelector("#openfaq6>span");
// var span6 = document.querySelector("#openfaq6>span");

document.querySelector("#openDiv1").addEventListener("click", function () {
  count1++;
  if (count1 % 2 != 0) {
    openfaq1.style.display = "none";
  } else if (count1 % 2 == 0) {
    openfaq1.style.display = "block";
  }
});
document.querySelector("#openDiv2").addEventListener("click", function () {
  count2++;
  if (count2 % 2 != 0) {
    openfaq2.style.display = "none";
  } else if (count2 % 2 == 0) {
    openfaq2.style.display = "block";
  }
});
document.querySelector("#openDiv3").addEventListener("click", function () {
  count3++;
  if (count3 % 2 != 0) {
    openfaq3.style.display = "none";
  } else if (count3 % 2 == 0) {
    openfaq3.style.display = "block";
  }
});
document.querySelector("#openDiv4").addEventListener("click", function () {
  count4++;
  if (count4 % 2 != 0) {
    openfaq4.style.display = "none";
  } else if (count4 % 2 == 0) {
    openfaq4.style.display = "block";
  }
});
document.querySelector("#openDiv5").addEventListener("click", function () {
  count5++;
  if (count5 % 2 != 0) {
    openfaq5.style.display = "none";
  } else if (count5 % 2 == 0) {
    openfaq5.style.display = "block";
  }
});
document.querySelector("#openDiv6").addEventListener("click", function () {
  count6++;
  if (count6 % 2 != 0) {
    openfaq6.style.display = "none";
  } else if (count6 % 2 == 0) {
    openfaq6.style.display = "block";
  }
});
var hide1 = document.querySelector("#hide1");
var hide2 = document.querySelector("#hide2");
var hide3 = document.querySelector("#hide3");
var count = 0;
document.querySelector("#HQfooter>span").addEventListener("click", function () {
  count++;
  if (count % 2 != 0) {
    hide1.style.display = "none";
    hide2.style.display = "none";
    hide3.style.display = "none";
  } else {
    hide1.style.display = "block";
    hide2.style.display = "block";
    hide3.style.display = "block";
  }
});
