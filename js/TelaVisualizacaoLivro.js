/*Botão de salvar*/
var mostrar = false;
var salvo = document.getElementById("salvo");
salvo.style.display = "none";

function SalvarLivro() {
  var salvo = document.getElementById("salvo");
  var salvar = document.getElementById("salvar");
  if (!mostrar) {
    salvo.style.display = "block";
    salvar.style.display = "none";
    mostrar = true;
  } else {
    salvo.style.display = "none";
    salvar.style.display = "block";
    mostrar = false;
  }
}


/*Botão de ler mais e ler menos do descrição do livro*/
function ExpandirTexto() {
  var truncado = document.getElementById("truncado");
  var inteiro = document.getElementById("inteiro");
  var condiçãoTexto = document.getElementById("condiçãoTexto");

  if (truncado.style.display === "none") {
    truncado.style.display = "-webkit-box";
    condiçãoTexto.innerHTML = "Ler mais";
    inteiro.style.display = "none";
  } else {
    truncado.style.display = "none";
    condiçãoTexto.innerHTML = "Ler menos";
    inteiro.style.display = "block";
  }
}

/*Botão de ler mais e ler menos do dados do livro*/
function ExpandirTexto2() {
  var truncado2 = document.getElementById("truncado2");
  var inteiro2 = document.getElementById("inteiro2");
  var condiçãoTexto2 = document.getElementById("condiçãoTexto2");

  if (truncado2.style.display === "none") {
    truncado2.style.display = "-webkit-box";
    condiçãoTexto2.innerHTML = "Ler mais";
    inteiro2.style.display = "none";
  } else {
    truncado2.style.display = "none";
    condiçãoTexto2.innerHTML = "Ler menos";
    inteiro2.style.display = "block";
  }
}

/*Botão de ler mais e ler menos do dados do autor*/
function ExpandirTexto3() {
  var truncado3 = document.getElementById("truncado3");
  var inteiro3 = document.getElementById("inteiro3");
  var condiçãoTexto3 = document.getElementById("condiçãoTexto3");

  if (truncado3.style.display === "none") {
    truncado3.style.display = "-webkit-box";
    condiçãoTexto3.innerHTML = "Ler mais";
    inteiro3.style.display = "none";
  } else {
    truncado3.style.display = "none";
    condiçãoTexto3.innerHTML = "Ler menos";
    inteiro3.style.display = "block";
  }
}

/*Lightbox*/
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}