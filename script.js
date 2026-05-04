const submit = document.getElementById("submit");
const alert_message = document.getElementById("alert");

//erro span
const first_name_erro = document.getElementById("first_name_erro");
const last_name_erro = document.getElementById("last_name_erro");
const email_erro = document.getElementById("email_erro");
const query_erro = document.getElementById("query_erro");
const message_erro = document.getElementById("message_erro");
const check_erro = document.getElementById("check_erro");
//style erro
const first_name_style = document.getElementById("first_name");
const last_name_style = document.getElementById("last_name");
const email_style = document.getElementById("email");
const message_style = document.getElementById("message");
const general = document.getElementById("general");
const support = document.getElementById("support");

function validate(first_name, last_name, email, type, message, check){
    let x = true
    if(!first_name){
        first_name_erro.textContent = "This field is required";
        first_name_style.style.border ="2px solid red";
        first_name_erro.setAttribute("aria-invalid", "true");
        x = false;
    }else{
        first_name_erro.textContent = "";
        first_name_style.style.border ="2px solid green";
        first_name_style.setAttribute("aria-invalid", "false");
    }

    if(!last_name){
        last_name_erro.textContent = "This field is required";
        last_name_style.style.border ="2px solid red";
        last_name_style.setAttribute("aria-invalid", "true");
        x = false;
    }else{
        last_name_erro.textContent = "";
        last_name_style.style.border ="2px solid green";
        last_name_style.setAttribute("aria-invalid", "false");
    }

    if(!email){
        email_erro.textContent = "This field is required";
        email_style.style.border ="2px solid red";
        email_style.setAttribute("aria-invalid", "true");
        x = false;
    }else{
        email_erro.textContent = "";
        email_style.style.border ="2px solid green";
        email_style.setAttribute("aria-invalid", "false");
    }

    if(!type){
        query_erro.textContent = "Please select a query type";
        query_erro.setAttribute("aria-invalid", "true");
        x = false;
    }else{
        query_erro.textContent = "";
        query_erro.setAttribute("aria-invalid", "false");
    }

    if(!message){
        message_erro.textContent = "This field is required";
        message_style.style.border ="2px solid red";
        message_style.setAttribute("aria-invalid", "true");
        x = false;
    }else{
        message_erro.textContent = "";
        message_style.style.border ="2px solid green";
        message_style.setAttribute("aria-invalid", "false")
    }

    if(!check){
        check_erro.textContent = "To submit this form, please consent to being contacted";
        check_erro.setAttribute("aria-invalid", "true")
        x = false;
    }else{
        check_erro.textContent = "";
        check_erro.setAttribute("aria-invalid", "false")
    }
   
    return x;
}


submit.addEventListener("click", (e) =>{
    e.preventDefault();

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let email = document.getElementById("email").value;
    let type = document.querySelector('input[name="query_type"]:checked');
    let message = document.getElementById("message").value;
    const check = document.getElementById("check").checked;

    

    let x = validate(first_name, last_name, email, type, message, check)
    if(!x){
        return;
    }

    
    document.getElementById("form").reset();
    alert_message.classList.remove("hide");
})

