/*Author    : Wafa Rifqi Anafin*/
/*Github    : https://github.com/wafarifki*/
/*Facebook  : https://facebook.com/wafarifkianafin*/
/*Instagram : https://instagram.com/wafarifki_*/
/*Website   : https://wafarifki.tk*/

var pages = new Array('halaman1', 'halaman2', 'halaman3', 'halaman4');

function klikMenu() {
  document.getElementsByClassName('dalemnya_kontener')[0].classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var dalemnya_kontener = document.getElementsByClassName('dalemnya_kontener')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');
  for (i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2');
  dalemnya_kontener.classList.add('page-' + pages[page]);
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
}
