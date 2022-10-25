document.querySelector("#run").addEventListener("click",function(){
    
    
    let email = document.querySelector("#email");
    console.log(Say_info(email));
    //ClearForm();
});

function ClearForm(){
    document.querySelector("#email").value = "";
}

function Say_info(email){
    const emailOK = ValidateInput(email);
    if(!emailOK) return "BRAK LUB NIEPELNE DANE";
    return `Email :  ${email.value}`
}

function ValidateInput(element){
    if(element.value.trim()===''){
        element.className = "error";
        return false;
    }
    element.className = "ok";
    return true;
}