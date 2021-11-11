function showtheloction() {
  var loctiondata = document.querySelector(".loctiondata");
  loctiondata.style.display = "block";
  document.querySelector(".fa-times-circle").style.display = "inline-block";
}

function locationsuggestionnone() {
  document.querySelector(".loctiondata").style.display = "none";
  document.querySelector(".fa-times-circle").style.display = "none";
}

var loctionsuggtion = [
  "Pune",
  "Hadapsar",
  "Hadapsar Gaon",
  "Kothrud",
  "Wakad",
  "Wakadewadi",
];

var serachwarp = document.querySelector(".loction");
var inputBox = serachwarp.querySelector(".i1n");
var suggbox = document.querySelector(".loctiondata");

inputBox.onkeyup = function (e) {
  var userinputdata = e.target.value;
  var emptyarryforcheck = [];

  if (userinputdata) {
    emptyarryforcheck = loctionsuggtion.filter(function (data) {
      return data
        .toLocaleLowerCase()
        .startsWith(userinputdata.toLocaleLowerCase());
    });
    emptyarryforcheck = emptyarryforcheck.map(function (data) {
      return (data = "<li>" + '<i class="fas fa-search"></i>' + data + "</li>");
    });
    console.log(emptyarryforcheck);
    serachwarp.classList.add("active");
    showsuggestioninlist(emptyarryforcheck);

    var loctionlist = document.querySelectorAll("li");
    for (let i = 0; i < loctionlist.length; i++) {
      loctionlist[i].setAttribute("onclick", "select(this)");
    }
  } else {
    serachwarp.classList.remove("active");
  }
};

function select(el) {
  let selectuser = el.textContent;
  inputBox.value = selectuser;
}

function showsuggestioninlist(list) {
  var listData;
  if (!list.length) {
    uservalue = inputBox.value;
    listData = "<li>" + '<i class="fas fa-search"></i>' + uservalue + "</li>";
  } else {
    listData = list.join("");
  }
  suggbox.innerHTML = listData;
}

// this code for last section user get link here text
document.querySelector("#Sendmes").addEventListener("click", Sendmes);

function Sendmes() {
  var MesNumber = document.getElementById("Numberformes").value;
  var MesString = +MesNumber;
  if (MesNumber.length == 10 && MesString > 0) {
    document.getElementById("DisaplymesGrenn").style.display = "block";
  } else {
    document.getElementById("redborder").style.border = "thin solid red";
  }
}
// this code for last section user get link here text

const mediaQuery = window.matchMedia("(max-width: 400px)");
// Check if the media query is true
if (mediaQuery.matches) {
  document.querySelector(".heaing6 > h4").textContent =
    "Find doctors in top specialities";
  document.querySelector(".heaing6 > h4").style.fontSize = "medium";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function showrespovemeni() {
  document.querySelector(".respoviesNavbarleftmanu").classList.toggle("active");
}

function closethermeanu() {
  document.querySelector(".respoviesNavbarleftmanu").classList.toggle("active");
}





// login fuction starts


function shareprofile() {
  document.querySelector(".userdata").classList.toggle("active");
}

function shareprofiles() {
  document.querySelector(".userdatas").classList.toggle("active");
}


var credentialsData = JSON.parse(localStorage.getItem("credentials")) || [];

var useronetimeid = JSON.parse(localStorage.getItem("OnetimeID")) || {};

var userbyotp = JSON.parse(localStorage.getItem("userbyotp")) || {};

var userbyotpk = Object.keys(userbyotp)

var useronetimeidcheck =  Object.keys(useronetimeid);

if(userbyotpk.length == 0 && useronetimeidcheck.length == 0){
      document.getElementById("loginbutton").style.display = "block";
      document.getElementById("userprofileshow").style.display = "none";

      document.getElementById("singupRe").style.display = "block";
      document.getElementById("userprofileshows").style.display = "none";
}

if(useronetimeidcheck.length > 0){
    var userprofile = credentialsData.filter(function(e){
      return useronetimeid.oneTimepass == e.password
    })
    console.log(userprofile)
    document.getElementById("userprofilename").textContent = userprofile[0].email
    document.getElementById("usernameinside").textContent = userprofile[0].email
    document.getElementById("usernumberinside").textContent = userprofile[0].contact

    document.getElementById("userprofilenames").textContent = userprofile[0].email
    document.getElementById("usernameinsides").textContent = userprofile[0].email
    document.getElementById("usernumberinsides").textContent = userprofile[0].contact

} else if(userbyotpk.length > 0){
  var userprofiles = credentialsData.filter(function(e){
    return userbyotp.usernumber == e.contact
  })
  document.getElementById("userprofilename").textContent = userprofiles[0].email
  document.getElementById("usernameinside").textContent = userprofiles[0].email
  document.getElementById("usernumberinside").textContent = userprofiles[0].contact

  document.getElementById("userprofilenames").textContent = userprofiles[0].email
  document.getElementById("usernameinsides").textContent = userprofiles[0].email
  document.getElementById("usernumberinsides").textContent = userprofiles[0].contact
}




function logout() {
  localStorage.removeItem("OnetimeID");
  localStorage.removeItem("userbyotp");
  reload = location.reload();
}








