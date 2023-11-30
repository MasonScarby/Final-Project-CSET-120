function togglePopup() {
    var popup = document.getElementById('popup');
    popup.classList.toggle('show-popup');
}
function showCongratsPopup() {
    var congratsPopup = document.getElementById('congratsPopup');
    congratsPopup.style.display = 'block';
    setTimeout(function () {
        hideCongratsPopup();
    }, 3000);
}
function hideCongratsPopup() {
    var congratsPopup = document.getElementById('congratsPopup');
    congratsPopup.style.display = 'none';
}
