const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.src = "img/hide.png";

    } else {
        passwordInput.type = 'password';
        icon.src = "img/show.png";
    }
});