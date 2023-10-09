document.addEventListener("DOMContentLoaded", function () {
    // Get the Sign In and Sign Up buttons
    const signInButton = document.querySelector('.sign-in');
    const signUpButton = document.querySelector('.sign-up');

    // Add event listeners to the buttons
    signInButton.addEventListener('click', showSignInData);
    signUpButton.addEventListener('click', showSignUpData);

    // Function to show the Sign In data on the DOM
    function showSignInData() {
        // Get the username and password fields
        const usernameField = document.querySelector('#login-user');
        const passwordField = document.querySelector('#login-pass');

        // Get the username and password values
        const username = usernameField.value;
        const password = passwordField.value;

        // Create a new element to show the Sign In data
        const signInDataElement = document.createElement('div');
        signInDataElement.textContent = `Sign In data:\nUsername: ${username}\nPassword: ${password}`;

        // Append the Sign In data element to the DOM
        document.body.appendChild(signInDataElement);
    }

    // Function to show the Sign Up data on the DOM
    function showSignUpData() {
        // Get the username, password, and email fields
        const usernameField = document.querySelector('#signup-user');
        const passwordField = document.querySelector('#signup-pass');
        const emailField = document.querySelector('#signup-email');

        // Get the username, password, and email values
        const username = usernameField.value;
        const password = passwordField.value;
        const email = emailField.value;

        // Create a new element to show the Sign Up data
        const signUpDataElement = document.createElement('div');
        signUpDataElement.textContent = `Sign Up data:\nUsername: ${username}\nPassword: ${password}\nEmail: ${email}`;

        // Append the Sign Up data element to the DOM
        document.body.appendChild(signUpDataElement);
    }
});
