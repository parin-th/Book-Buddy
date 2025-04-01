function login() {
window.location.href = "login.html";
}

function register() {
window.location.href = "register.html";
}

const cursor = document.getElementById('cursor');
// Update the position of the circle based on mouse movement
document.addEventListener('mousemove', (event) => {
const mouseX = event.clientX + window.scrollX; // Account for horizontal scrolling
const mouseY = event.clientY + window.scrollY; // Account for vertical scrolling

// Adjust the position to center the circle correctly
cursor.style.left = `${mouseX - cursor.offsetWidth / 4}px`;
cursor.style.top = `${mouseY - cursor.offsetHeight / 4}px`;
});



function gback() {
    window.location.href = "index.html";
}


