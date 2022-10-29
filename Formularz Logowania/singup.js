
document.querySelector("#run").addEventListener("click",function(){
    
    
    let haslo = document.querySelector("#password");
    let email = document.querySelector("#email");
    let identyfikator = document.querySelector("#identyfikator")
    console.log(Say_info( haslo, email, identyfikator));
    //ClearForm();
});

function ClearForm(){
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
}

function Say_info(haslo, email, identyfikator){
    const passwordOK = ValidateInput(haslo);
    const emailOK = ValidateInput(email);
    const identyfikatorOK = ValidateInput(identyfikator);
    if(!passwordOK|| !emailOK) return "BRAK LUB NIEPELNE DANE";
    return `Email :  ${haslo.value} Password : ${email.value} Identyfikator : ${identyfikator.value}`
}

function ValidateInput(element){
    if(element.value.trim()===''){
        element.className = "error";
        return false;
    }
    element.className = "ok";
    return true;
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
  });
  