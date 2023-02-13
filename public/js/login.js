

let btnLogin = document.getElementById("login-btn")

//Create nav bar log out p element to replace login and sign up
// function addNavLogoutEl() {
//   const newEl = document.createElement("p");
//   const logOut = document.createTextNode("Log out");
//   newEl.classList.add("card-title text-center");
//   newEl.setAttribute("id","nav-logout")
//   newEl.appendChild(logOut);
//   document.body.insertBefore(newEl, navLogin);
// }

// Hide nav log in 
// function hideNavLogin () {
//   navLogin.style.display = none;
// }

const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
console.log(username)
console.log("testings response")
      // redirect the browser to the trivia question page 
      window.location.replace('/trivia');
      alert(response.statusText);
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
};
console.log(btnLogin);

console.log(btnLogin);

window.onload = function(){
  btnLogin.addEventListener('click', loginFormHandler);
}
  