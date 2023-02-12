let navLogout = document.getElementById("nav-logout");

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    navSignup.style.display = flex;
    navLogin.style.display = flex;
    navLogout.style.display = none;
  } else {
    alert(response.statusText);
  }
};
// CHECK SELECTOR ID MATCHES LOGOUT HANDLEBAR WHEN CREATED.
navLogout.addEventListener('click', logout);
