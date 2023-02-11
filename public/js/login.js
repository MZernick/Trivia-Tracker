let navSignup = document.getElementById("nav-signup");
let navLogin = document.getElementById("nav-login")

//Create nav bar log out p element to replace login and sign up
function addNavLogoutEl() {
  const newEl = document.createElement("p");
  const logOut = document.createTextNode("Log out");
  newEl.classList.add("card-title text-center");
  newEl.setAttribute("id","nav-logout")
  newEl.appendChild(logOut);
  document.body.insertBefore(newEl, navSignup);
}

// Hide nav log in and sign up
function hideNavLoginSignup () {
  navLogin.style.display = none;
  navSignup.style.display = none;
}

const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
<<<<<<< HEAD
=======

>>>>>>> a5c07b4fff7118306eb83e3afe1a79ebb0af22c0
      // If successful, redirect the browser to the trivia question page 
      //will game happen on main page?
      document.location.replace('/game');
      hideNavLoginSignup();
      addNavLogoutEl();
    } else {
      alert(response.statusText);
      // alternatively,   alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/playgame');
=======
      document.location.replace('/game');
>>>>>>> a5c07b4fff7118306eb83e3afe1a79ebb0af22c0
      hideNavLoginSignup();
      addNavLogoutEl();
    } else {
      alert(response.statusText);
      // alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
