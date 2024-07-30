
// this validation is done by using JAVASCRIPT and below this, i used JQUERY

const usernameNode = document.getElementById("username");
const passwordNode = document.getElementById("password");
const usernameErrorNode = document.getElementById("username-error");
const passwordErrorNode = document.getElementById("password-error");


const usernamePattern = /^[A-Za-z][A-Za-z0-9_]{3,}$/; // Alphanumeric username starting with a letter
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,12}$/; // Password must be 6-12 characters long with at least one uppercase, one lowercase, one number, and one special character


const validateUsername = () => {
    usernameErrorNode.textContent = "";
    const username = usernameNode.value.trim();
    
    if (username === "") {
        usernameErrorNode.textContent = "Username is required.";
        return false;
    } else if (!usernamePattern.test(username)) {
        usernameErrorNode.textContent = "Username must be at least 4 characters long and start with a letter.";
        return false;
    }
    return true;
};

const validatePassword = () => {
    passwordErrorNode.textContent = "";
    const password = passwordNode.value.trim();
    
    if (password === "") {
        passwordErrorNode.textContent = "Password is required.";
        return false;
    } else if (!passwordPattern.test(password)) {
        passwordErrorNode.textContent = "Password must be 6-12 characters long with at least one uppercase letter, one lowercase letter, one number, and one special character.";
        return false;
    }
    return true;
};


usernameNode.addEventListener("blur", validateUsername);
passwordNode.addEventListener("blur", validatePassword);


document.getElementById("login-form").addEventListener("submit", function(event) {
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();

    if (!(isUsernameValid && isPasswordValid)) {
        event.preventDefault(); 
    }
});


// this validation is done by using JQUERY

// $(document).ready(function() {

//     const $usernameNode = $('#username');
//     const $passwordNode = $('#password');
//     const $usernameErrorNode = $('#username-error');
//     const $passwordErrorNode = $('#password-error');


//     const usernamePattern = /^[A-Za-z][A-Za-z0-9_]{3,}$/; // Alphanumeric username starting with a letter
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,12}$/; // Password must be 6-12 characters long with at least one uppercase, one lowercase, one number, and one special character


//     const validateUsername = () => {
//         $usernameErrorNode.text('');
//         const username = $usernameNode.val().trim();
        
//         if (username === '') {
//             $usernameErrorNode.text('Username is required.');
//             return false;
//         } else if (!usernamePattern.test(username)) {
//             $usernameErrorNode.text('Username must be at least 4 characters long and start with a letter.');
//             return false;
//         }
//         return true;
//     };

//     const validatePassword = () => {
//         $passwordErrorNode.text('');
//         const password = $passwordNode.val().trim();
        
//         if (password === '') {
//             $passwordErrorNode.text('Password is required.');
//             return false;
//         } else if (!passwordPattern.test(password)) {
//             $passwordErrorNode.text('Password must be 6-12 characters long with at least one uppercase letter, one lowercase letter, one number, and one special character.');
//             return false;
//         }
//         return true;
//     };


//     $usernameNode.on('blur', validateUsername);
//     $passwordNode.on('blur', validatePassword);


//     $('#login-form').on('submit', function(event) {
//         const isUsernameValid = validateUsername();
//         const isPasswordValid = validatePassword();

//         if (!(isUsernameValid && isPasswordValid)) {
//             event.preventDefault(); /
//         }
//     });
// });

