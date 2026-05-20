let slideIndex = 1;

createDots();
showSlides(slideIndex);

// Dynamisch Dots erzeugen
function createDots() {
  const slides = document.getElementsByClassName("mySlides");
  const dotsContainer = document.getElementById("dots-container");

  dotsContainer.innerHTML = "";

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function () {
      currentSlide(i + 1);
    };

    dotsContainer.appendChild(dot);
  }
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Alle Slides verstecken
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Active von allen Dots entfernen
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Aktiven Slide anzeigen
  slides[slideIndex - 1].style.display = "block";

  // Aktiven Dot markieren
  dots[slideIndex - 1].classList.add("active");
}