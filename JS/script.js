// Hambuger Section
const hambuger = document.querySelector("#hambuger");
const navmenu = document.querySelector(".navmenu");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
// When click on outside or the link should close the hambuger
document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hambuger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);

// Sticky Navbar Section
window.addEventListener("scroll", function () {
  let header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// To Top
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// Pre Loader
// Background Pre-Loader
setTimeout(function () {
  $(".backgroud-preloader").fadeToggle();
}, 2500);

// Scrolling Animation
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 500;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
  });
};


// Validation Contact Message Error
const messageError = document.getElementById("message-error");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");

// Validation Message error
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const required = 30;
  const remaining = required - message.length;

  // Conditional Statements
  if (message.length ==0) {
    messageError.innerHTML = "Please enter your message";
    return false;
  }

  if (remaining > 0) {
    messageError.innerHTML = remaining + " more characters require";
    return false;
  }

  messageError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Name Validation Message
function validateName() {
  const name = document.getElementById("contact-name").value;

  // Conditional Statement
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter your full name";
    return false;
  }

  nameError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Email Validation Message
function validateEmail() {
  const email = document.getElementById("contact-email").value;

  // Conditional Statement
  if (email.length == 0) {
    emailError.innerHTML = "Email Id is require";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)) {
    emailError.innerHTML = "<i class='wrong bx bxs-x-circle'></i>";
    return false;
  }

  emailError.innerHTML = "<i class='correct bx bxs-check-circle'></i>";
  return true;
}

// Submit Validation Message
function validateSubmit(){ 
  // Conditional Statement
  if (!validateMessage() || !validateName() || !validateEmail() || !validateSubject()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix all errors";
    setTimeout(function(){submitError.style.display = "none";},3000);
    return false;
  }
}