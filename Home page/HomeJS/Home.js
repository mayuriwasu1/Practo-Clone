

// function menuClick(e){

//   document.getElementById("forProvidersmanu").style.display = "block";

// }

// function DobesClick(){
//   document.getElementById("forProvidersmanu").style.display = "none";
// }


document.querySelector("#Sendmes").addEventListener("click", Sendmes)

function Sendmes() {
  var MesNumber = document.getElementById("Numberformes").value;
  var MesString = +MesNumber;
  if(MesNumber.length == 10 && MesString > 0) {
    document.getElementById("DisaplymesGrenn").style.display = "block";
  } else{
    document.getElementById("redborder").style.border = "thin solid red";
  }
}