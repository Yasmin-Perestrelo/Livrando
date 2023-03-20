var btn1 = document.getElementById('btn-recomendações');
var Recomendações = document.querySelector('.Recomendações');

btn1.addEventListener('click', function () {

  if (Confirmação.style.display = 'none') {
    Recomendações.style.display = 'block';
    //cor
    btn1.style.color = '#637CFF';
    btn2.style.color = '#373737';
    //borda
    btn1.style.borderBottom = '#637CFF 2px solid';
    btn2.style.borderBottom = 'none';
    
  }
  else {
    Recomendações.style.display = 'none';
  }
});

var btn2 = document.getElementById('btn-confirmação');
var Confirmação = document.querySelector('.Confirmação');

btn2.addEventListener('click', function () {

  if (Recomendações.style.display = 'none') {
    Confirmação.style.display = 'block';
    //cor
    btn2.style.color = '#637CFF';
    btn1.style.color = '#373737';
    //borda
    btn2.style.borderBottom = '#637CFF 2px solid';
    btn1.style.borderBottom = 'none';
    //padding
    btn2.style.paddingBottom = '0.7%';

  }
  else {
    Confirmação.style.display = 'none';
  }
});
