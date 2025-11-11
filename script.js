// Scripts
console.log(`Hello World!`);

window.addEventListener("DOMContentLoaded", function () {
  // query DOM elements after the document is parsed
  let submit = document.getElementById("submit");
  let field = document.getElementById("email");
  let error = document.getElementById("error");

  submit.addEventListener("click", function (e) {
    e.preventDefault(); // prevent form navigation if button is inside a form

    let email = (document.getElementById("email").value || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validate using the regex test method
    if (!email || !emailPattern.test(email)) {
      if (field) field.style.border = "1px solid hsl(4, 100%, 67%)";
      if (error) error.style.display = "block";
      else console.warn("#error element not found to show validation message");
    } else {
      // reset styles and navigate
      if (field) field.style.border = "1px solid hsl(0, 0%, 100%)";
      if (error) error.style.display = "none";
      window.location.href = "success.html";
    }
  });
});
