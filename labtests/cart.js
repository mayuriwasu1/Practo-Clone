var dob_value=document.getElementById("dob_val").value;
var DOB_err = document.getElementById("DOBerror_msg");
if(dob_value<10){
    console.log("yes")
    DOB_err.textContent ="No";
}
else{
    DOB_err.textContent = "Patient age cannot be less than 10 years";
}
var patname = document.getElementById("patname_input").value;
var patname_err = document.getElementById("patname_err");
if(patname.length=2){
    patname_err.textContent="Required";
}
else if (patname.length = 0){
  patname_err.textContent = " ";
}