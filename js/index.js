// Hamburger button
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
// Collapsable footer
document.addEventListener("scroll", () => {
  window.scrollY > 450
    ? document.body.classList.add("footer-show")
    : document.body.classList.remove("footer-show");
});

function copyEmail() {
  const el = document.createElement("textarea");
  el.value = "andr" + "esvil" + "ainfante@g" + "ma" + "il.com";
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("Email copied to clipboard!");
}
