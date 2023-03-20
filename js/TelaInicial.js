/*Livros Técnicos*/
var expandir = false;
var cima = document.getElementById("seta-menu-cima");
cima.style.display = "none";

function MostrarCheckbox() {
  var checkboxes = document.getElementById("checkboxes");
  var cima = document.getElementById("seta-menu-cima");
  var baixo = document.getElementById("seta-menu-baixo");
  if (!expandir) {
    checkboxes.style.display = "block";
    cima.style.display = "block";
    baixo.style.display = "none";
    expandir = true;
  } else {
    checkboxes.style.display = "none";
    cima.style.display = "none";
    baixo.style.display = "block";
    expandir = false;
  }
}

/*Literatura Brasileira*/
var expandir2 = false;
var cima2 = document.getElementById("seta-menu-cima2");
cima2.style.display = "none";

function MostrarCheckbox2() {
  var checkboxes2 = document.getElementById("checkboxes2");
  var cima2 = document.getElementById("seta-menu-cima2");
  var baixo2 = document.getElementById("seta-menu-baixo2");
  if (!expandir2) {
    checkboxes2.style.display = "block";
    cima2.style.display = "block";
    baixo2.style.display = "none";
    expandir2 = true;
  } else {
    checkboxes2.style.display = "none";
    cima2.style.display = "none";
    baixo2.style.display = "block";
    expandir2 = false;
  }
}

/*Literatura Estrangeira*/
var expandir3 = false;
var cima3 = document.getElementById("seta-menu-cima3");
cima3.style.display = "none";

function MostrarCheckbox3() {
  var checkboxes3 = document.getElementById("checkboxes3");
  var cima3 = document.getElementById("seta-menu-cima3");
  var baixo3 = document.getElementById("seta-menu-baixo3");
  if (!expandir3) {
    checkboxes3.style.display = "block";
    cima3.style.display = "block";
    baixo3.style.display = "none";
    expandir3 = true;
  } else {
    checkboxes3.style.display = "none";
    cima3.style.display = "none";
    baixo3.style.display = "block";
    expandir3 = false;
  }
} 

/*Literatura Infanto-Juvenil*/
var expandir4 = false;
var cima4 = document.getElementById("seta-menu-cima4");
cima4.style.display = "none";

function MostrarCheckbox4() {
  var checkboxes4 = document.getElementById("checkboxes4");
  var cima4 = document.getElementById("seta-menu-cima4");
  var baixo4 = document.getElementById("seta-menu-baixo4");
  if (!expandir4) {
    checkboxes4.style.display = "block";
    cima4.style.display = "block";
    baixo4.style.display = "none";
    expandir4 = true;
  } else {
    checkboxes4.style.display = "none";
    cima4.style.display = "none";
    baixo4.style.display = "block";
    expandir4 = false;
  }
} 

//filtrar livros 



// function bookSearch(){
//   var resultado = document.getElementById('resultado');

//     fetch('https://www.googleapis.com/books/v1/volumes?q=filter=free-ebooks&key=AIzaSyAezxvzkcCj7I0UHRoI-CJQxHQKoi8M5VE')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data.items.length)
//         for(i = 0; i < data.items.length; i++){
//           var img = ´<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail + </img>´
//         resultado.innerHTML += ;
//       }
//     })
// }


function moeda(z){
  v = z.value;

  v=v.replace(/(\d{2})(\d{1})$/,"$1.$2") // coloca ponto antes dos ultimos digitos

  z.value = v;
  }