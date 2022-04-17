const buyButtons = document.querySelectorAll('.js-place-button')
const modal = document.querySelector('.js-modal')
const closeSymbol = document.querySelector('.js-x-button')
const closeButton = document.querySelector('.js-close-button')
const modalContainer = document.querySelector('.js-modal-container')

let showBuyTicket = () => {
    modal.classList.add('open')
}

let hideBuyTicket = () => {
    modal.classList.remove('open')
}

for (const buyButton of buyButtons) {
    buyButton.addEventListener('click', showBuyTicket)
}

closeSymbol.addEventListener('click', hideBuyTicket)
closeButton.addEventListener('click', hideBuyTicket)
modal.addEventListener('click', hideBuyTicket)
modalContainer.addEventListener('click', (event) => {
    event.stopPropagation()
})
// modal 


//Menu-header
let header = document.getElementById('header')
let mobileMenu = document.querySelector('.menu-button')
let headerHeight = header.clientHeight
let menuCloses = document.querySelectorAll('#nav li a[href*="#"]')


mobileMenu.onclick = () => {
    let isClose = header.clientHeight === headerHeight;
    header.style.height = isClose ? 'auto' : null;
    // isClose ? header.style.height = 'auto' :  header.style.height = null;
}

for (let i = 0; i < menuCloses.length; i++) {
    let menuClose = menuCloses[i];
    menuClose.onclick = (event) => {
        let isParent = menuClose.nextElementSibling && menuClose.nextElementSibling.classList.contains('subnav');
        console.log(menuClose);

        isParent ? event.preventDefault() : header.style.height = null;

    }
}


//slider 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}