// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById('header');
  //When the scroll is greater than 50 viewport height add the 'scroll-header' class to the header tag.
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader)

// SWIPER POPULAR
var swiperPopular = new Swiper(".popular__container", {
  navigation: {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// VALUE ACCORDION
const accordionItems = document.querySelectorAll('.value__accordion-item');

accordionItems.forEach(item => {
  const itemHeader = item.querySelector('header');
  itemHeader.addEventListener('click', event => {
    const itemContent = item.querySelector('.value__accordion-content');

    itemContent.style.height = (itemContent.style.height === '0px' || itemContent.style.height === '') ? 'auto' : '0';
  })
})