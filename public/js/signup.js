let btnSignup = document.getElementById("signup-btn");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("username-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();
  console.log(username.value);
  if (username && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // redirect to trivia questions
      window.location.replace("/trivia");
      hideNavLogin();
      addNavLogoutEl();
    } else {
      alert(response.statusText);
    }
  }
};
console.log(btnSignup);

window.onload = function () {
  btnSignup.addEventListener("click", signupFormHandler);
};

function myFunction() {
  var x = document.querySelector("#password-signup");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  console.log(x);
}
