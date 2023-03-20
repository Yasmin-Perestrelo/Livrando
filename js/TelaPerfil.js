/* Máscara telefone */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}


/*Habilitar e desabilitar campos*/
function toggleEnable(el1, el2, el3, el4, el5, el6, el7, el8) {
    var textbox = document.getElementById(el1, el2, el3, el4, el5, el6, el7, el8);
    
    if (textbox.disabled) {
        document.getElementById(el1).disabled = false;
        document.getElementById(el2).disabled = false;
				document.getElementById(el3).disabled = false;
				document.getElementById(el4).disabled = false;
        document.getElementById(el5).disabled = false;
				document.getElementById(el6).disabled = false;
				document.getElementById(el7).disabled = false;
        document.getElementById(el8).disabled = false;
     	} else {
        document.getElementById(el1).disabled = true;
        document.getElementById(el2).disabled = true;
				document.getElementById(el3).disabled = true;
				document.getElementById(el4).disabled = true;
        document.getElementById(el5).disabled = true;
				document.getElementById(el6).disabled = true;
				document.getElementById(el7).disabled = true;
        document.getElementById(el8).disabled = true;
      }
 }


/*Botão*/
// var mostrar = false;
// var salvarPerfil = document.getElementById("salvar-perfil");
// salvarPerfil.style.display = "none";

// function SalvarLivro() {
//   var editarPerfil = document.getElementById("editar-perfil");
//   var salvarPerfil = document.getElementById("salvar-perfil");
//   if (!mostrar) {
//     salvarPerfil.style.display = "block";
//     editarPerfil.style.display = "none";
//     mostrar = true;
//   } else {
//     salvarPerfil.style.display = "none";
//     editarPerfil.style.display = "block";
//     mostrar = false;
//   }
// }


/*Criar e excluir campo de gênero do livro*/
var data='<div style="display: flex;"><input id="genero-livro" class="input-genero-livro form-control" maxlength="20" type="text" id="genero-livro" name="genero-livro" value="Romance" disabled> <a type="button" class="remove-categoria" onclick="removeDiv(this)"><span aria-hidden="true">&times;</span></a></div>';
           
function addNew() {
   var newContent = document.createElement('div');
  newContent.innerHTML = data;
  document.getElementById('target').appendChild(newContent);
  }

function removeDiv(args){
args.parentNode.remove()
}