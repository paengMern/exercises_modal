// Get modal element
var modal = document.getElementById('simpleModal');
// Get open model  button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for Outside click
window.addEventListener('click', outsideClick);

// Listen for open click
modalBtn.addEventListener('click',  openModal);

// Listen for close click
closeBtn.addEventListener('click',  closeModal);

// Function to open modal
function openModal() {
    //console.log('123');
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    //console.log('123');
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}