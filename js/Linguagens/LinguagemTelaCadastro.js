// //recarregar âncoras de languagem 
var dataReload = document.querySelectorAll("[data-reload]");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        // -- Tela Cadatro -- //
        cadastro: "Sign up",
        nome: "Name",
        nome2: "Type your name",
        sobrenome: "Last Name",
        sobrenome2: "Type your last name",
        nascimento: "Date of birth",
        email: "Type your e-mail",
        cpf: "Type your cpf",
        genero: "Favorite genres",
        senha: "Type your password",
        senha2: "Password",
        confimar: "Password confirmation",
        confirmar2: "Confirm your password" ,
        imagem: "Profile picture",
        imagem2: "No file selected",
        cadastrar: "Sign up",
        login: "Already have a registration?",
        login2: "Access your account",
    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {

        // cadastro
        cadastro.textContent = language.eng.cadastro;
        nome.textContent = language.eng.nome;
        nome2.placeholder = language.eng.nome2;
        sobrenome.textContent = language.eng.sobrenome;
        sobrenome2.placeholder = language.eng.sobrenome2;
        nascimento.textContent = language.eng.nascimento;
        email.placeholder = language.eng.email;
        cpf.placeholder = language.eng.cpf;
        genero.textContent = language.eng.genero;
        senha.placeholder = language.eng.senha;
        senha2.textContent = language.eng.senha2;
        confirmar.textContent = language.eng.confimar;
        confirmar2.placeholder = language.eng.confirmar2;
        imagem.textContent = language.eng.imagem;
        cadastrar.value = language.eng.cadastrar;
        login.textContent = language.eng.login;
        login2.textContent = language.eng.login2;
    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}