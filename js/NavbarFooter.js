
var expandir = false;
var cima = document.getElementById("seta-navbar-cima");
cima.style.display = "none";

function MostrarPerfil() {

  var cima = document.getElementById("seta-navbar-cima");
  var baixo = document.getElementById("seta-navbar-baixo");
  if (!expandir) {
    cima.style.display = "block";
    baixo.style.display = "none";
    // cima.style.margin = "30% 0% 0% 0%";
    // baixo.style.margin = "40% 0% 0% 0%";
    expandir = true;
  } else {
    cima.style.display = "none";
    baixo.style.display = "block";
    // cima.style.margin = "30% 0% 0% 0%";
    // baixo.style.margin = "40% 0% 0% 0%";
    expandir = false;
  }
}



