// //recarregar âncoras de languagem 
var dataReload = document.querySelectorAll("[data-reload]");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        // -- Tela Login -- //
        login: "Sign in",
        email: "Type your e-mail",
        senha: "Type your password",
        senha2: "Password",
        senha3: "Forgot password?",
        cadastro: "Don't have a registration?",
        cadastro2: "Sign up",
        entrar: "Log in"
    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {

        // login
        login.textContent = language.eng.login;
        email.placeholder = language.eng.email;
        senha.placeholder = language.eng.senha;
        senha2.textContent = language.eng.senha2;
        senha3.textContent = language.eng.senha3;
        cadastro.textContent = language.eng.cadastro;
        cadastro2.textContent = language.eng.cadastro2;
        entrar.value = language.eng.entrar;
    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}