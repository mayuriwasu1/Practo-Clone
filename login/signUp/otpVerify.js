

document.getElementById("btn").addEventListener("click", errorMessage);

function errorMessage() {
        var error = document.getElementById("error")
        if ((document.getElementById("match").value) != "5869") 
        { // Changing HTML to draw attention
            error.innerHTML = "<span style='color: #E35A49;font-size:11px'>"+
                        "invalid otp</span>"
        }else if(match.length==0){
            error.innerHTML = "<span style='color: #E35A49;font-size:11px'>"+
                        "please fill otp</span>"
        } else if((document.getElementById("match").value) == "5869"){
            window.location.href = "/Home page/Home.html"
        }

    }

