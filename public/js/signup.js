// let navSignup = document.getElementById("nav-signup");
let navLogin = document.getElementById("nav-login")
let btnSignup = document.getElementById("signup-btn")

// //Create nav bar log out p element to replace login and sign up
function addNavLogoutEl() {
  const newEl = document.createElement("p");
  const logOut = document.createTextNode("Log out");
  newEl.classList.add("nav-link active");
  newEl.setAttribute("id","nav-logout")
  newEl.appendChild(logOut);
  document.body.insertBefore(newEl, navLogin);
}



// const loginFormHandler = async (event) => {
//   event.preventDefault();
//   // Collect values from the login form
//   const username = document.querySelector('#username-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (username && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the trivia question page 
//       //will game happen on main page? Is route for the game /trivia or /game?
//       document.location.replace('/trivia');
//       hideNavLoginSignup();
//       // addNavLogoutEl();
//     } else {
//       alert(response.statusText);
//       // alternatively,   alert('Failed to log in.');
//     }
//   }
// };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();
  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // correct path as needed to direct to trivia questions /game or /trivia? Update loginFormHandler to the same.
      window.location.replace('/trivia');
      // alert(response.statusText);
      hideNavLogin();
      addNavLogoutEl();
    } else {
      alert(response.statusText);
      // alert('Failed to sign up.');
    }
  }
};
console.log(btnSignup);


// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

window.onload=function(){
 btnSignup.addEventListener('click', signupFormHandler);
}
  