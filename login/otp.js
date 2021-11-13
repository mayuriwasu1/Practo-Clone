
  var submit = document.getElementById("request-otp");
  submit.addEventListener("click", handleSubmit);
  var credentialsData = JSON.parse(localStorage.getItem("credentials")) || [];

  var userbyotp = JSON.parse(localStorage.getItem("userbyotp")) ;

  function handleSubmit(e) {
    e.preventDefault();

    var contact = document.getElementById("contact").value;
    var error = document.getElementById("error");
    if (contact == 0) {
      error.innerHTML =
          "<span style='color:#E35A49;font-size:11px''>" + "Mobile Number field cannot be empty</span>";
    } else {
      var isValidUser = false;
      for (var i = 0; i < credentialsData.length; i++) {
        if (credentialsData[i].contact == contact) {
          isValidUser = true;
          break;
        }
      }
     
      if (isValidUser) {
        var userotp = {
          usernumber : contact
        }

        localStorage.setItem("userbyotp" , JSON.stringify(userotp));

        window.location.href = "otpVerify.html"; 
      } else {
        var error = document.getElementById("error");
       
        error.innerHTML =
          "<span style='color:#E35A49;font-size:11px'>" + "Mobile number is not valid</span>";
      }
    }
  }
