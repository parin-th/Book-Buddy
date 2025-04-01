function ldmode() {
    document.body.classList.toggle("inverted");
    const button = document.getElementById("ldmode");

}

function version() {
    const versionText = document.getElementById("version-text");
    const text = document.getElementById("text");
    
    if (versionText) {
        if (versionText.innerText === "1.0.0") {
            text.innerText = "No Previous Version!"; // No previous version
            versionText.innerText = "";  // Previous version
            // Previous version text
            // text.innerText = "Previous Version:  "; // Previous version 
        } else {
            text.innerText = "Current Version:  "; // No previous version
            versionText.innerText = "1.0.0"; // Current version
        }
    }
}

