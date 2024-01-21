function openPopup() {
    var popUp = document.getElementById("popUp");
    popUp.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    var popUp = document.getElementById("popUp");
    popUp.style.display = 'none';
}

// Add event listener to the button
document.getElementById("openPopupButton").addEventListener("click", openPopup);
