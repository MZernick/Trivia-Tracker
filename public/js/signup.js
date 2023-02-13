// let navSignup = document.getElementById("nav-signup");
// let navLogin = document.getElementById("nav-login")
let btnSignup = document.getElementById("signup-btn")

// //Create nav bar log out p element to replace login and sign up
// function addNavLogoutEl() {
//   const newEl = document.createElement("p");
//   const logOut = document.createTextNode("Log out");
//   newEl.classList.add("nav-link active");
//   newEl.setAttribute("id","nav-logout")
//   newEl.appendChild(logOut);
//   document.body.insertBefore(newEl, navLogin);
// }

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('username-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();
  console.log(username.value);
  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // redirect to trivia questions 
      window.location.replace('/trivia');
      // alert(response.statusText);
      hideNavLogin();
      addNavLogoutEl();
    } else {
      alert(response.statusText);
    }
  }
};
console.log(btnSignup);

window.onload=function(){
 btnSignup.addEventListener('click', signupFormHandler);
}
  