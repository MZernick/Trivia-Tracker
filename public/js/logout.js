let navLogout = document.getElementById("logout");

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
// CHECK SELECTOR ID MATCHES LOGOUT HANDLEBAR WHEN CREATED.
navLogout.addEventListener('click', logout);
