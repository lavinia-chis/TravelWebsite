const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");
const formBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const formClose = document.querySelector("#form-close");
const menu = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const videoBtn = document.querySelectorAll(".vid-btn");
const email = document.getElementById("email");
const password = document.getElementById("password");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-time");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
// email validation start

email.addEventListener("input", () => {
  const emailBox = document.querySelector(".emailbox");
  const emailText = document.querySelector(".emailText");
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

  if (email.value.match(emailPattern)) {
    emailBox.classList.add("valid");
    emailBox.classList.remove("invalid");
    emailText.innerHTML = "Your Email Address is Valid";
  } else {
    emailBox.classList.add("invalid");
    emailBox.classList.remove("valid");
    emailText.innerHTML = "Must be a valid email address.";
  }
});

password.addEventListener("input", () => {
  const passBox = document.querySelector(".passbox");
  const passText = document.querySelector(".passText");
  const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (password.value.match(passPattern)) {
    passBox.classList.add("valid");
    passBox.classList.remove("invalid");
    passText.innerHTML = "Your Password is Valid";
  } else {
    passBox.classList.add("invalid");
    passBox.classList.remove("valid");
    passText.innerHTML =
      "Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.";
  }
});
//  email validation end

const swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
