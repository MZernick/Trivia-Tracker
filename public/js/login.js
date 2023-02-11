let navSignup = document.getElementById("nav-signup");

//Create nav bar log out p element to replace login and sign up
function addNavLogoutEl() {
  const newEl = document.createElement("p");
  const logOut = document.createTextNode("Log out");
  newEl.classList.add("card-title text-center");
  newEl.setAttribute("id","nav-logout")
  newEl.appendChild(logOut);
  document.body.insertBefore(newEl, navSignup);
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
      // If successful, redirect the browser to the trivia question page 
      document.location.replace('/playgame');
      document.getElementById("nav-login").style.display = none;
      navSignup.style.display = none;
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
      document.location.replace('/playgame');
      navSignup.style.display = none;
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
