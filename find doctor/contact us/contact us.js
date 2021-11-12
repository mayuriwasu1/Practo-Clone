document.getElementById("submit_button").addEventListener("click", showadress);
// var dataContainer =JSON.parse(localStorage.getItem("userCred")) || []
function showadress() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var city = document.getElementById("city").value;
    var adress = document.getElementById("adr").value;
    var msg = " Your information has been saved. We will contact you soon."

   
    // var dataobj = {
    //     Name: name,
    //     MobileNo: mobile,
    //     Email: email,
    //    Adress: adress
    // }
    // dataContainer.push(dataobj)
    // localStorage.setItem("userCred", JSON.stringify(dataobj));
    
    
        var row1 = document.createElement("h4")
    row1.textContent = name
    
    var row2 = document.createElement("h4")
    row2.textContent = mobile;

    var row3 = document.createElement("h4")
    row3.textContent= city
        document.querySelector("#adress").append(row1,row2,row3,msg)
   
  
}