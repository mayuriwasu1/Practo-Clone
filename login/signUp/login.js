var submit = document.getElementById("submit")
    submit.addEventListener("click", handleSubmit)
    var credentialsData = JSON.parse(localStorage.getItem('credentials')) || [];

    var useronetimeid = JSON.parse(localStorage.getItem("OnetimeID")) ;
    
    function handleSubmit(e){
        e.preventDefault()
        var email = document.getElementById("email").value
        var pass = document.getElementById("pass").value
        if(email == "" || pass == ""){
            error1.innerHTML =
          "<span style='color: #E35A49;font-size:11px'>" + "Mobile Number / Email ID field cannot be empty</span>";
          error2.innerHTML =
          "<span style='color: #E35A49;font-size:11px'>" + "Password field cannot be empty</span>";
           
        }else {
            var isValidUser = false
        for(var i=0; i<credentialsData.length; i++){
            if(credentialsData[i].email == email || credentialsData[i].contact == email && credentialsData[i].password == pass){
                isValidUser = true
                break;
            }
        }
        if(isValidUser){
           
            var onTimeI = {
                OneTimeMoE : email,
                oneTimepass:pass
            }

            localStorage.setItem("OnetimeID" , JSON.stringify(onTimeI))

        }else {
            error1.innerHTML =
          "<span style='color: #E35A49;font-size:11px'>" + "Invalid Mobile Number / Email ID </span>";
          error2.innerHTML =
          "<span style='color: #E35A49;font-size:11px'>" + "Invalid Password field </span>";
        }
        }
    }