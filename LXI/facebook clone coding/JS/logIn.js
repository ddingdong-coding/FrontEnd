function checkEmailandPassword() {
    let email = $("#email").val();
    let password = $("#password").val();
    if (email.includes('@')==true) {
        if ((password == "facebook")==true) {
            alert("Login success")
            window.location.href = "main.html";
        } else {
            alert("Please check your password")
        }
    } else {
        alert("Please check your email again")
    }
}

