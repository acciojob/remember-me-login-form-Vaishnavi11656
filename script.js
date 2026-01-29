window.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const existingBtn = document.getElementById("existing");

    // Show existing user button if credentials are saved
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingBtn.style.display = "inline-block";
    }

    // Handle form submit
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            existingBtn.style.display = "inline-block";
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            existingBtn.style.display = "none";
        }
    });

    // Existing user login
    existingBtn.addEventListener("click", function () {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });

});
