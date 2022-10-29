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
    const emailOK = ValidateEmail(email);
    if(!passwordOK|| !emailOK) return "BRAK LUB NIEPELNE DANE";
    document.location.href = './dashboard.html';
    return `Password :  ${haslo.value} Email : ${email.value}`
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
  
