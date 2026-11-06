const form = document.getElementById("registrationForm");
const details = document.getElementById("details");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const selectedEvent = document.getElementById("event").value;

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("displayEvent").textContent = selectedEvent;

  details.hidden = false;
});
