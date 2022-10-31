document.querySelector("#run").addEventListener("click",function(){
    
    
    let email = document.querySelector("#email");
    console.log(Say_info(email));
    //ClearForm();
});

function ClearForm(){
    document.querySelector("#email").value = "";
}

function Say_info(email){
    const emailOK = ValidateEmail(email);
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

function ValidateEmail(input) {

    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
    if (input.value.match(validRegex)) {
        input.className = "ok";
    return true;
        } else {
            input.className = "error";
            return false;
        }
    }

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
  });
  