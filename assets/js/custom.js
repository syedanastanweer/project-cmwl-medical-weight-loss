window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".navbar-brand img");
    const toplefthead = document.querySelector(".nbtop .toplefthead");
    const topleftheadH4 = document.querySelector(".toplefthead h4");

    if (window.scrollY > 100) { // Change '50' to the scroll position you prefer
        navbar.classList.add("scrolled");
        logo.style.width = "10rem"; // Change logo width on scroll
        toplefthead.classList.add("scrolled");
        topleftheadH4.classList.add("scrolled"); // Add class to h4
    } else {
        navbar.classList.remove("scrolled");
        logo.style.width = "14rem"; // Reset logo width
        toplefthead.classList.remove("scrolled");
        topleftheadH4.classList.remove("scrolled"); // Remove class from h4
    }
});
