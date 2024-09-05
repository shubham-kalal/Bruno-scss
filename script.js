// let menuButton = document.querySelector("#menu-btn");
// let navbar = document.querySelector("#nav-links");

// menuButton.addEventListener("click", () => {
//   navbar.classList.toggle("active");
//   const isActive = navbar.classList.contains("active");
//   menuButton.setAttribute("class", isActive ? "fa-solid fa-xmark" : "fa-solid fa-bars");
// });

// navbar.addEventListener("click", () => {
//   navbar.classList.remove("active");
//   menuButton.setAttribute("class", "fa-solid fa-bars");
// });


// Configuration object for ScrollReveal
const scrollreveals = {
    distance: "100px",
    origin: "bottom",
    duration: 2000,
};

// Apply ScrollReveal directly without creating a new variable
ScrollReveal().reveal(".banner-section", {
    ...scrollreveals
});

ScrollReveal().reveal(".work-section ", {
    ...scrollreveals   
});

ScrollReveal().reveal(".service-section", {
    ...scrollreveals   
});

ScrollReveal().reveal(".scroll-logo", {
    ...scrollreveals   
});

ScrollReveal().reveal(".about-section", {
    ...scrollreveals   
});

ScrollReveal().reveal("#contact", {
    ...scrollreveals   
});




let images = document.querySelector(".images");
















