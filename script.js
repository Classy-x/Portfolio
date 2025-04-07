// Resume Download
document.getElementById("cv").addEventListener("click", (event) => {
  event.preventDefault(); 
  let confirmDownload = confirm("Do you want to download my Resume?");
  if (confirmDownload) {
    let link=document.createElement('a');
    link.href='assets/Senthil_kumar_cv.pdf';
    link.download="Senthil reference CV";
    document.body.appendChild(link);
    link.click();
  }
});

//Contact modal 
const open = document.getElementById("open_modal_button");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close_modal_button");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
});



const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ScrollReveal animations
const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .testimonial__wrapper, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });

//Form submition
document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  let formData = new FormData(this);
  
  let response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
  });

  let result = await response.json();
  const container = document.getElementById('my_contain')
  let success_pop =  document.getElementById('success');
  let error_pop =  document.getElementById('error');
  if (result.success) {
      // success_pop.classList.toggle('active');
      // container.classList.add('active')
      // setTimeout(()=>{
      //   success_pop.classList.remove('active')
      //   container.classList.remove('active')
      // },3000)
      modal_container.classList.remove("show");
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('message').value = "";
      alert("Got it! I'll be in touch soon")
  } else {
    const errorMessage = result.message || "Oops! Looks like something broke.";
    // error_pop.querySelector("p").textContent = errorMessage;
    // container.classList.add('active')
    // error_pop.classList.add('active');
    // setTimeout(() => {
    //   error_pop.classList.remove('active');
    //   container.classList.remove('active')
    // }, 3000);
    alert(errorMessage)
  }
});
