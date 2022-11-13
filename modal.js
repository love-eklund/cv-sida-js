// get html elements
const imageSmall = document.getElementById("modal-image-small");
const imageLarge = document.getElementById("modal-image-large");
const modal = document.getElementById("modal");

// add event listeners
imageSmall.addEventListener("click", open);
imageLarge.addEventListener("click", close);
window.addEventListener("click", closeOutside);

// open modal
function open() {
    modal.style.display = "flex";
}
// close modal
function close() {
    modal.style.display = "none";
}
// close modal on outside click
function closeOutside(event) {
    if (event.target === modal) { // only true if modal element itself is clicked, not elements inside it
        modal.style.display = "none";
    }
}