document.addEventListener('DOMContentLoaded', function () {
    // Show the user sign-up form by default
    showContainer('userSignUpForm');

    // Add event listeners to switch between user and manager sign-up forms
    document.getElementById('goToManagerSignUp').addEventListener('click', function () {
        showContainer('managerSignUpForm');
    });

    document.getElementById('goToSignUp').addEventListener('click', function () {
        showContainer('userSignUpForm');
    });

    // Add event listeners for form submissions
    document.getElementById('userSignUpForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Add logic for user sign-up here
        // Redirect or perform additional actions as needed
        window.location.href = "/Login and Sign up - Copy/Login/Login.html";
    });

    document.getElementById('managerSignUpForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Add logic for manager sign-up here
        // Redirect or perform additional actions as needed
        window.location.href = "/Login and Sign up - Copy/Login/Login.html";
    });
});

function showContainer(containerId) {
    const containers = ['userSignUpForm', 'managerSignUpForm'];
    containers.forEach(container => {
        const element = document.getElementById(container);
        element.style.display = container === containerId ? 'block' : 'none';
    });
}
