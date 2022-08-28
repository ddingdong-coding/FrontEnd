function checkEmailandPassword() {
    let email = $("#email").val();
    let password = $("#password").val();
    if (!email.includes('@')) {
        alert("Please check your email again")
    } else {
        if (!(password == "facebook")) {
            alert("Please check your password")
        } else {
            window.location.href = "mainPage.html";
        }
    }
}
