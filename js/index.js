const navToggle = document.querySelector(".header__toggle");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".nav__item");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    document.body.classList.add("footer-show");
    console.log("si");
  } else {
    document.body.classList.remove("footer-show");
    console.log("no");
  }
});

// Window.scroll(() => console.log(window.scrollTop())); 450

function copyEmail() {
  // Create new element
  var el = document.createElement("textarea");
  // Set value (string to be copied)
  el.value = "andres" + "vila" + "infante@" + "gma" + "il.com";
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
  alert("Email copied to clipboard!");
}
