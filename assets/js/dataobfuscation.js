function asciiToString(asciiText) {
    const asciiTextArray = asciiText.split(';').map(Number);
    let textTransformed = asciiTextArray.map(code => String.fromCharCode(code)).join('');
    return textTransformed;
}

function getEmail() {
    let email = asciiToString('106;112;112;118;106;117;97;110;112;101;100;114;111;64;103;109;97;105;108;46;99;111;109');
    return email;
}

function getGithub() {
    let gitHubProfile = asciiToString('106;112;112;97;115;118;105;116');
    return gitHubProfile;
}

function showEmail() {
    let email = getEmail();
    document.getElementById("email").innerText = email;
}

function mailtoEmail() {
    let email = getEmail();
    let emailLink = document.getElementById("emailLink");
    emailLink.href = "mailto:" + email;
}

function hrefGithub() {
    let gitHubProfile = getGithub();
    let gitHubLink = document.getElementById("gitHubLink");
    gitHubLink.href = "https://github.com/" + gitHubProfile;
}

function getContactMe() {
    let email = getEmail();
    let contact = "Please contact me for more information (" + email + ")";
    return contact
}

function showResidence() {
    let residence = getContactMe();
    document.getElementById("residence").innerText = residence;
}

function showPhoneNumber() {
    let phone = getContactMe();
    document.getElementById("phone").innerText = phone;
}


