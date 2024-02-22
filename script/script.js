// Navbar DOM
const navbar = document.querySelector(".navbar");
const navbarNavlist = document.querySelector(".navbar-navlist");
const navbarOrder = document.querySelector(".navbar-order");
const navbarContain = document.querySelector(".navbar-contain");
const navbarNavlistToggle = document.querySelector(".navbar-navlist-toggle");

//  Mengatur responsifitas navbar
navbarContainInsert();
window.addEventListener("resize", navbarContainInsert);

// Mengatur posisi navbar ketika scrolling
window.addEventListener("scroll", navbarScroll);

// Toggle class active ketika tombol toggle di klik
navbarNavlistToggle.addEventListener("click", () => {
  navbarContain.classList.toggle("active");
});

// Memindahkan navlist dan order dari/ke navbarContain sesuai dengan viewport
function navbarContainInsert() {
  if (window.innerWidth <= 768) {
    navbarContain.appendChild(navbarNavlist);
    navbarContain.appendChild(navbarOrder);
  } else {
    navbar.insertBefore(navbarOrder, navbarNavlistToggle);
    navbar.insertBefore(navbarNavlist, navbarOrder);
  }
}

// Menampilkan/Menghilangkan navbar ketika scrolling
let lastScrollPosition = 80;
function navbarScroll() {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scroll down
    navbar.classList.add("dissapear");
  } else {
    // Scroll up
    navbar.classList.remove("dissapear");
  }

  lastScrollPosition = currentScrollPosition;
}
