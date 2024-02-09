// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById("header");
  //When the scroll is greater than 50 viewport height add the 'scroll-header' class to the header tag.
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// SWIPER POPULAR
var swiperPopular = new Swiper(".popular__container", {
  navigation: {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// VALUE ACCORDION
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
  const itemHeader = item.querySelector("header");

  itemHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });

});

const toggleItem = (item) => {
  const itemContent = item.querySelector('.value__accordion-content');

  if (item.classList.contains('accordion-open')) {
    itemContent.removeAttribute('style');
    item.classList.remove('accordion-open')
  } else {
    itemContent.style.height = itemContent.scrollHeight + "px";
    item.classList.add('accordion-open');
  }
}

//SCROLL TO SECTIONS USING ACTIVE LINKS
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);

// SHOW SCROLL UP BUTTON
function scrollUp(){
  const scrollUpBtn = document.getElementById('scroll-up');
  //When scroll is higher than 350vh, display scrollup button

  if(this.scrollY >= 350 ) {
    scrollUpBtn.classList.add('show-scroll')
  } else {
    scrollUpBtn.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

// DARK LIGHT THEME
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun'

//Previously selected topic (if user selected one)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
}

//We validate if the user previously chose a topic
if (selectedTheme) {
  //If the validation was fulfilled, we ask the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
};

//Activate or deactivate the theme manually
themeButton.addEventListener('click', ()=> {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //Save the current theme and icon
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})