
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

section.forEach(sec =>{

  let top = window.scrollY;
  let height = sec.offsetHeight;
  let offset = sec.offsetTop - 150;
  let id = sec.getAttribute('id');

  if(top => offset $$ top < offset + height){
    navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
    });
  };
});