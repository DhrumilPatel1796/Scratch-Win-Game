let fieldsCheck;

let isNotEmpty = function(userInput) {
    let pattern = /^[a-zA-Z]+$/
    if (pattern.test(userInput.field.value.trim())){
        return true;
    }
    return false;
}
let isValidProvince = function(userInput) {
    let pattern = /^(BC|AB|MN|NB|NL|NWT|NS|NU|ON|PI|QC|SK|YK)$/;
    if (pattern.test(userInput.field.value.trim())){
        return true;
    }
    return false;
}
let isValidEmail = function(userInput) {
    let pattern = /^[a-zA-Z0-9_.!#$%^&*()?~+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/;
    //  a-zA-Z0-9     ====>  Matches all letters and numbers, 
    // _.!#$%^&*()?~+   ==>  Matches all those symbols.
    // +   ===============> Matches all the previous rules one or unlimited times.
    // @  ================> Matches the @
    // Then it is the anytext (did not include symbols) FOLLOWED by a dot ( \.  ), and whatever for the TLD.

    //The regex above is still too restrictive as basically any character from any character is allowed on email addresses. But it checks for a basic part1@part2.part3 pattern.
    if (pattern.test(userInput.field.value.trim())){
        return true;
    }
    return false;
}

let isValidDate = function(userInput) {
    let pattern = /^[0-9]+[-|\/][0-9]+[-|\/][0-9]+$/
    //Match any number for an unlimited amount of characters (probably could limit that to four at most)
    //Match either - or / ONCE.
    if (pattern.test(userInput.field.value.trim())){
        return true;
    }
    return false;
}
let isValidPassword = function(userInput) {
    let invalidPattern = /^([^a-z]{1,}|[^A-Z]{1,}|[^0-9]{1,}|[^\W]{1,}|.{0,5})$/
    //The pattern above matches INVALID passwords.
    // [^a-z]{1,} finds passwords that DO NOT have one or more lowercases
    // [^A-Z]{1,} finds passwords that do not have one or more uppercases.
    // [^\W]{1,} does not have at least one symbol
    // .{0,5} is less than 6 characters.
    if (invalidPattern.test(userInput.field.value.trim())){
        return false; //This one returns false WHEN the pattern matches. 
    }
    return true;
}
let hasUserAcceptedTerms = function(userInput){
    if (userInput.field.checked){
        return true;
    }
    return false;
}

let formChecker = function(e) {
    let errorsDetected = 0;
    errorsReset();
    e.preventDefault(); //Prevent default form submit behavior.
    fieldsCheck.forEach(field => {
        if (field.checker(field)==false){
            field.error.innerText = field.msg;
            errorsDetected++;
        }
    });
    if (errorsDetected > 0){

    }
    else{
        //Submit to server here.
        console.log("Awesome. You are ready to play");
    }
}

let errorsReset = function() {
    fieldsCheck.forEach(input => {
        input.error.innerText = '';
    })
}

let initForm = function() {
    let firstName = document.querySelector("#firstName");
    let firstNameError = document.querySelector("#firstNameError");
    let lastname = document.querySelector("#lastName");
    let lastnameError = document.querySelector("#lastNameError");
    let province = document.querySelector("#province");
    let provinceError = document.querySelector("#provinceError");
    let email = document.querySelector("#email");
    let emailError = document.querySelector("#emailError");
    let dob = document.querySelector("#dob");
    let dobError = document.querySelector("#dobError");
    let password = document.querySelector("#password");
    let passwordError = document.querySelector("#passwordError");
    let bmdConsent = document.querySelector("#bmd-consent");
    let bmdConsentError = document.querySelector("#bmdConsentError");

    fieldsCheck = [
        {field: firstName, checker: isNotEmpty, error: firstNameError, msg: "Please enter your firstname."},
        {field: lastname, checker: isNotEmpty, error: lastnameError, msg: "Please enter your lastname."},
        {field: province, checker: isValidProvince, error: provinceError, msg: "Please enter a valid location."},
        {field: email, checker: isValidEmail, error: emailError, msg: "Please enter a valid email."},
        {field: dob, checker: isValidDate, error: dobError, msg: "Please enter a valid date"},
        {field: bmdConsent, checker: hasUserAcceptedTerms, error: bmdConsentError, msg: "Please accept the terms before proceeding."},
        {field: password, checker: isValidPassword, error: passwordError, msg: "Password required lowercase, uppercase, numbers, symbols, and at least 8 characters. "}
    ];

    let formSubmit = document.querySelector("#formSubmit");
    if (formSubmit){
        formSubmit.addEventListener("click", formChecker);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    initForm();
});