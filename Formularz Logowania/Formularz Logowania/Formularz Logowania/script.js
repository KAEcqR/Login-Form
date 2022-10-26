
document.querySelector("#run").addEventListener("click",function(){
    
    
    let haslo = document.querySelector("#password");
    let email = document.querySelector("#email");
    console.log(Say_info( haslo, email));
    //ClearForm();
});

function ClearForm(){
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
}

function Say_info(haslo, email){
    const passwordOK = ValidateInput(haslo);
    const emailOK = ValidateInput(email);
    if(!passwordOK|| !emailOK) return "BRAK LUB NIEPELNE DANE";
    return `Email :  ${haslo.value} Password : ${email.value}`
}

function ValidateInput(element){
    if(element.value.trim()===''){
        element.className = "error";
        return false;
    }
    element.className = "ok";
    return true;
}

