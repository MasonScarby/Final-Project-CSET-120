document.getElementById("goToSignUp").addEventListener("click", function() {
document.getElementById("container").style.transform = "translateX(-100%)";
});

document.getElementById("goToLogin").addEventListener("click", function() {
document.getElementById("container").style.transform = "translateX(0)";
});
function showManagerLogin() {
    document.querySelector('.manager-login-container').style.display = 'block';
}