
function showthesearch() {
  var searchdata = document.querySelector(".searchdata");
  searchdata.style.display = "block";
  document.querySelector("#wrong").style.display = "inline-block";
}

function searchsuggestionnone() {
  document.querySelector(".searchdata").style.display = "none";
  document.querySelector("#wrong").style.display = "none";
}


var serachwarps = document.querySelector(".search");
var inputBoxs = serachwarps.querySelector(".i2n");
var suggboxs = document.querySelector(".searchdata");

inputBoxs.onkeyup = function (e) {
  var userinputdata = e.target.value;
  var emptyarryforchecks = [];

  if (userinputdata) {
    emptyarryforchecks = searchdatas.filter(function (data) {
      return data
        .toLocaleLowerCase()
        .startsWith(userinputdata.toLocaleLowerCase());
    });
    emptyarryforchecks = emptyarryforchecks.map(function (data) {
      return (data = "<li>" + '<i class="fas fa-search"></i>' + data + "</li>");
    });
    serachwarps.classList.add("active");
    showsuggestioninlists(emptyarryforchecks);

    var searchlist = document.querySelectorAll(".searchdata");
    for (let i = 0; i < searchlist.length; i++) {
      searchlist[i].setAttribute("onclick", "selects(his)");
    }
  } else {
    serachwarps.classList.remove("active");
  }
};

  function selects(el){
    let selectuser = el.textContent;
    inputBoxs.value = selectuser
  }

  function showsuggestioninlists(list){
     var listsData;
     if(!list.length){
        uservalue = inputBoxs.value;
      
     } else{
       listsData = list.join("")
     }
     suggboxs.innerHTML = listsData;

  }
