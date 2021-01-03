function validate(){
    var name = document.getElementsByName("userName");
    var email = document.getElementsByName("userEmail");
    var phone = document.getElementsByName("userPhone");
    
    var pass = document.getElementsByName("userPassword");
   
    var email_regx = / ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$ /;
    var phone_regx = / ^[6789]{1}[0-9]{9}$ /;
    var name_regx = /^[A-Za-z]+$/;
    
//Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
      
    var pass_regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$ /;
    
    if(name_regx.test(name)==false){
        alert("Name Must Have Characters Only");
       
        return false;
    }
    
    if(email_regx.test(email)==false){
        alert("Enter Proper Email Id");
       
        return false;
    }
    if(phone_regx.test(phone)==false){
        alert("Enter Valid Phone Number");
        
        return false;
    }
    if(pass_regx.test(pass)==false){
        alert("Enter Password As Per Given Criteria");
       
        return false;
    }
    else{
        true;
    }
   return true;   
    
}

