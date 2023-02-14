const userscoresHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/userscores`, {
    method: "GET",
  });

  if (response.ok) {
  } else {
    alert("Failed to locate user scores");
  }
};

window.onload = function () {
  document
    .getElementById("userscores")
    .addEventListener("click", userscoresHandler);
};
