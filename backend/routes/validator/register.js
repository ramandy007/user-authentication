const Validator =require("validator");
const isEmpty=require("is-empty");

module.exports = function validateRegisterInput(data){

    console.log("register valid loaded")



    let errors ={};

    data.first_name=!isEmpty(data.first_name)?data.first_name :"";
    data.last_name=!isEmpty(data.last_name)?data.last_name :"";

    data.email=!isEmpty(data.email)?data.email :"" ;
    data.password=!isEmpty(data.password)?data.password :"" ;
    data.password1=!isEmpty(data.password1)?data.password1 :"" ;

    if (Validator.isEmpty(data.first_name)){
        errors.first_name = "First Name field is required";
    }

    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";

    } else if (!Validator.isEmail(data.email)){
        errors.email ="Email is invalid";

    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if(Validator.isEmpty(data.password1)){
        errors.password1 = "Confirm Password field is required";
    }

    if(!Validator.equals(data.password,data.password1)){
        errors.password1 = "Passwords must match";
    }

    console.log(errors ,data)

    return{
        errors,
        isValid:isEmpty(errors)
    };


};