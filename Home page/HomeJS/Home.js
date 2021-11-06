
function showtheloction(){
  var loctiondata = document.querySelector(".loctiondata")
    loctiondata.style.display = "block"
    document.querySelector(".fa-times-circle").style.display = "inline-block"
}

function locationsuggestionnone(){

     document.querySelector(".loctiondata").style.display = "none"
    document.querySelector(".fa-times-circle").style.display = "none"

}


var loctionsuggtion = [
  "Pune",
  "Hadapsar",
  "Hadapsar Gaon",
  "Kothrud",
  "Wakad",
  "Wakadewadi"
]

var serachwarp = document.querySelector(".loction")
var inputBox  = serachwarp.querySelector(".i1n")
var suggbox = document.querySelector(".loctiondata")

inputBox.onkeyup = function(e){
 var userinputdata = e.target.value;
 var emptyarryforcheck = [];

  if(userinputdata){
    emptyarryforcheck = loctionsuggtion.filter(function(data){
      return data.toLocaleLowerCase().startsWith(userinputdata.toLocaleLowerCase())
    })
    emptyarryforcheck = emptyarryforcheck.map(function(data){
      return data = '<li>' + '<i class="fas fa-search"></i>' +  data + '</li>'
    })
    console.log(emptyarryforcheck)
    serachwarp.classList.add("active")
    showsuggestioninlist(emptyarryforcheck);

    var loctionlist = document.querySelectorAll("li")
    for (let i = 0; i < loctionlist.length; i++) {
      loctionlist[i].setAttribute("onclick" , "select(this)")      
    }
  } else{
    serachwarp.classList.remove("active")
  } 
}


function select(el){
  let selectuser = el.textContent;
  inputBox.value = selectuser
}


function showsuggestioninlist(list){
   var listData;
   if(!list.length){
      uservalue = inputBox.value;
      listData = '<li>' + '<i class="fas fa-search"></i>' + uservalue + '</li>';
   } else{
     listData = list.join("")
   }
   suggbox.innerHTML = listData;

}






// this code for last section user get link here text
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


