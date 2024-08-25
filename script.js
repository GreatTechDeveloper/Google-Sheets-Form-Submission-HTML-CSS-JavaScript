const scriptURL =
  "https://script.google.com/macros/s/AKfycbzIplLOFj_AwgLCdRwOH_9AgvRjpX_6sU9MYLbL9MbsjXV2NGAXfes6q6Y0ELziDzWb/exec";

const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
