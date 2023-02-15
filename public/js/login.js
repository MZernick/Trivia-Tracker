let btnLogin = document.getElementById("login-btn");

const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // redirect the browser to the trivia question page
      window.location.replace("/trivia");
    } else {
      console.log(response);
      alert(response.statusText);
    }
  }
};
console.log(btnLogin);

console.log(btnLogin);

window.onload = function () {
  btnLogin.addEventListener("click", loginFormHandler);
};

function myFunction() {
  var x = document.querySelector("#password-login");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  console.log(x);
};
