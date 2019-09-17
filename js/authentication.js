// ===Function===
(function() {
    const loginBtn = document.querySelector('#loginBtn');
    const loginForm = document.querySelector('#loginForm');
    const loginCloseBtn = document.querySelector('#loginCloseBtn');

    const registerBtn = document.querySelector('#registerBtn');
    const registerForm = document.querySelector('#registerForm');
    const registerCloseBtn = document.querySelector('#registerCloseBtn');

    loginBtn.addEventListener('click', function() {
        toggleModal(loginForm);
    });
    registerBtn.addEventListener('click', function() {
        toggleModal(registerForm);
    });
    loginCloseBtn.addEventListener('click', function() {
        toggleModal(loginForm);
    });
    registerCloseBtn.addEventListener('click', function() {
        toggleModal(registerForm);
    });

    function toggleModal(element) {
        element.classList.toggle('show-modal');
    }   
})();

const loginForm = document.querySelector('#loginForm');
var fullname = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('pass');

document.querySelector('.signUp-Form').addEventListener('submit', authe); 
    //prevent the normal submission of the form
  
function authe(event){
    event.preventDefault();

    if (fullname.value !== "" && email.value !== "" && password.value !== "") {
        var user = {
            name: fullname.value,
            email: email.value,
            password: password.value
        }

        if (localStorage.getItem(user.email) === null) {
            localStorage.setItem(user.email, JSON.stringify(user));
            // window.location.assign("/sign-in.html");
            // toggleModal(loginForm);
            toggleModal(registerForm);
            toggleModal(loginForm);
        } else {
            document.querySelector("#statement").innerHTML = "USER ALREADY EXISTS"
        }
    } else {
        document.querySelector("#statement").innerHTML = "Fill inputs please"
    }

   
}

function toggleModal(element) {
    element.classList.toggle('show-modal');
}   
 