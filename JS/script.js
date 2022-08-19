let firstName = document.querySelector("#firstName");
let firstNameWar = document.querySelector("#nameDivFirst p");
let lastName = document.querySelector("#lastName");
let lastNameWar = document.querySelector("#nameDivLast p");
let email = document.querySelector("#email");
let emailWar = document.querySelector("#emailDiv p");
let webSite = document.querySelector("#webSite");
let websiteWar = document.querySelector("#websiteDiv p");
let companyName = document.querySelector("#companyName");
let companyNameWar = document.querySelector("#centerNameDiv p");
let zipCode = document.querySelector("#zipCode")
let zipCodeWar = document.querySelector("#centerNoDiv p");
let phone = document.querySelector("#phone");
let phoneWar = document.querySelector("#phoneDiv p");
let address = document.querySelector("#address");
let addressWar = document.querySelector("#farmerAddressDiv p");
let username = document.querySelector("#username");
let usernameWar = document.querySelector("#usernameDIv p");
let password = document.querySelector("#password");
let passwordWar = document.querySelector("#passwordDiv p");
let btn = document.querySelector("#btn");
let firstNameRegEx = /^[A-Z]+\S+$/;
let lastNameRegEx = /^[A-Z]/;
let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let webSIteRegEx = /^(http[s]?:\/\/)*[a-z0-9]+([\.-]?[a-z0-9])*(\.[a-z]?([\.-]))*(\.[a-z]{2,3})+$/;
let companyNameRegex = /^[A-Z]+[A-Za-z0-9 ]+$/;
let zipCodeRegEx = /^[0-9?(\-)]+$/;
let phoneRegEx = /^\+[0-9]{1,3} +\S[0-9]+$/;
let addressRegEx = /^[0-9a-zA-Z\s,-/]+$/;
let usernameRegEx = /^[a-zA-Z0-9]+?([\._-]{0,})*\w+$/;
let passwordRegEx = /^(?=.*\w)(?=.*[!@#$%^&*\)\(+=._-])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;   // **** Բացատրել ?=.*-ը

btn.addEventListener("click", ()=>{
    if (firstNameRegEx.test(firstName.value) === false){
        firstName.style.border = "2px solid red";
        firstNameWar.style.display = "flex";

    }else{
        firstName.style.border = "2px solid #8FA599";
        firstNameWar.style.display = "none";
    }
    if(lastNameRegEx.test(lastName.value) === false){
        lastName.style.border = "2px solid red";
        lastNameWar.style.display = "flex";
    }else{
        lastName.style.border = "2px solid #8FA599";
        lastNameWar.style.display = "none";
    }
    if (emailRegEx.test(email.value) === false){
        email.style.border = "2px solid red";
        emailWar.style.display = "flex";
    }else{
        email.style.border = "2px solid #8FA599";
        emailWar.style.display = "none";
    }
    if (webSIteRegEx.test(webSite.value) === false){
        webSite.style.border = "2px solid red";
        websiteWar.style.display = "flex";
    }else{
        webSite.style.border = "2px solid #8FA599";
        websiteWar.style.display = "none";
    }
    if (companyNameRegex.test(companyName.value) === false){
        companyName.style.border = "2px solid red";
        companyNameWar.style.display = "flex";
    }else{
        companyName.style.border = "2px solid #8FA599";
        companyNameWar.style.display = "none";
    }
    if (zipCodeRegEx.test(zipCode.value) === false){
        zipCode.style.border = "2px solid red";
        zipCodeWar.style.display = "flex";
    }else{
        zipCode.style.border = "2px solid #8FA599";
        zipCodeWar.style.display = "none";
    }
    if (phoneRegEx.test(phone.value)=== false){
        phone.style.border = "2px solid red";
        phoneWar.style.display = "flex";
    }else{
        phone.style.border = "2px solid #8FA599";
        phoneWar.style.display = "none";
    }
    if (addressRegEx.test(address.value) === false){
        address.style.border = "2px solid red";
        addressWar.style.display = "flex";
    }else{
        address.style.border = "2px solid #8FA599";
        addressWar.style.display = "none";
    }
    if (usernameRegEx.test(username.value) === false){
        username.style.border = "2px solid red";
        usernameWar.style.display = "flex";
    }else{
        username.style.border = "2px solid #8FA599";
        usernameWar.style.display = "none";
    }
    if (passwordRegEx.test(password.value) === false){
        password.style.border = "2px solid red";
        passwordWar.style.display = "flex";
    }else{
        password.style.border = "2px solid #8FA599";
        passwordWar.style.display = "none";
    }
})
