var hiddencontent = document.querySelector("#hiddenContent");
document.querySelector("#hiddenContent").style.display = "none";
var count = 0;

document.querySelector("#seemore").addEventListener("click", function () {
  if (count % 2 == 0) {
    hiddencontent.style.display = "contents";
    document.querySelector("#seemore").textContent = "See less";
  } else {
    hiddencontent.style.display = "none";
    document.querySelector("#seemore").textContent = "See more";
  }
  count++;
});
