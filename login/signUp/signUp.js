var submit = document.getElementById("submit");
submit.addEventListener("click", handleSubmit);

var credentialsData = JSON.parse(localStorage.getItem("credentials")) || [];

function handleSubmit(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var contact = document.getElementById("contact").value;
  var error = document.querySelector(".error");
  var error2 = document.querySelector(".error2");
  var error3 = document.querySelector(".error3");
  var isEmailTaken = false;
  for (var i = 0; i < credentialsData.length; i++) {
    if (credentialsData[i].email == email) {
      isEmailTaken = true;
      break;
    }
  }

  var newCredential = {
    email: email,
    password: pass,
    contact: contact,
  };
console.log(email.length)
  if(email.length==0||pass.length==0||contact.length==0){
   
      error.innerHTML =
      "<span style='color: #E35A49;font-size:11px'>" + "Full Name field cannot be empty</span>";
      error2.innerHTML =
      "<span style='color: #E35A49;font-size:11px'>" + "Mobile Number field cannot be empty</span>";
      error3.innerHTML =
      "<span style='color: #E35A49;font-size:11px'>" + "Password field cannot be empty</span>";
  }
  else if (isEmailTaken) {
    error.innerHTML =
      "<span style='color: #E35A49;font-size:11px'>" + "User already exist.</span>";
  } else{
    credentialsData.push(newCredential);
    localStorage.setItem("credentials", JSON.stringify(credentialsData));
    window.location.href = "login.html";
  }
}

