const pswrdField = document.getElementById('senha'),
toggleIcon = document.getElementById('olho1');

toggleIcon.onclick = () =>{
  if(pswrdField.type === "password"){
    pswrdField.type = "text";
    toggleIcon.classList.add("active");
  }else{
    pswrdField.type = "password";
    toggleIcon.classList.remove("active");
  }
}

const pswrdField2 = document.getElementById('confirmar2'),
toggleIcon2 = document.getElementById('olho2');

toggleIcon2.onclick = () =>{
  if(pswrdField2.type === "password"){
    pswrdField2.type = "text";
    toggleIcon2.classList.add("active");
  }else{
    pswrdField2.type = "password";
    toggleIcon2.classList.remove("active");
  }
}