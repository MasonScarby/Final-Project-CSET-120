document.getElementById("goToSignUp").addEventListener("click", function() {
    document.querySelector('.sign-in-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'block';
    document.querySelector('.manager-sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(-100%)";
});

document.getElementById("goToLogin").addEventListener("click", function() {
    document.querySelector('.sign-in-container').style.display = 'block';
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.manager-sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(0)";
});

document.getElementById("goToManagerSignUp").addEventListener("click", function() {
    document.querySelector('.manager-login-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.manager-sign-up-container').style.display = 'block';
    document.getElementById("container").style.transform = "translateX(-100%)";
});

document.getElementById("goToManagerLogin").addEventListener("click", function() {
    document.querySelector('.manager-login-container').style.display = 'block';
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.manager-sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(0)";
});

function showManagerLogin() {
    document.querySelector('.manager-login-container').style.display = 'block';
    document.querySelector('.sign-in-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'none';
    document.querySelector('.manager-sign-up-container').style.display = 'none';
}
document.getElementById("goToSignUp").addEventListener("click", function() {
    document.querySelector('.sign-in-container').style.display = 'none';
    document.querySelector('.sign-up-container').style.display = 'block';
    document.getElementById("container").style.transform = "translateX(-100%)";
});

document.getElementById("goToLogin").addEventListener("click", function() {
    document.querySelector('.sign-in-container').style.display = 'block';
    document.querySelector('.sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(0)";
});

document.getElementById("goToManagerSignUp").addEventListener("click", function() {
    document.querySelector('.manager-login-container').style.display = 'none';
    document.querySelector('.manager-sign-up-container').style.display = 'block';
    document.getElementById("container").style.transform = "translateX(-100%)";
});

document.getElementById("goToManagerLogin").addEventListener("click", function() {
    document.querySelector('.manager-login-container').style.display = 'block';
    document.querySelector('.manager-sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(0)";
});

document.getElementById("managerSignUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector('.manager-login-container').style.display = 'block';
    document.querySelector('.manager-sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(0)";
});

document.getElementById("userSignUpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector('.sign-in-container').style.display = 'block';
    document.querySelector('.sign-up-container').style.display = 'none';
    document.getElementById("container").style.transform = "translateX(0)";
});