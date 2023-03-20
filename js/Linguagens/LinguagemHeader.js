// //recarregar âncoras de languagem 
var dataReload = document.querySelectorAll("[data-reload]");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        // -- NavBar -- //
        login: "Sign in",
        cadastro: "Sign up",
        pesquisa: "Book search",
        pesquisa2: "Search",
        anunciar: "Announce",
    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {

        // NavBar
        login.textContent = language.eng.login;
        cadastro.textContent = language.eng.cadastro;
        pesquisa.textContent = language.eng.pesquisa;
        pesquisa2.textContent = language.eng.pesquisa2;
        anunciar.textContent = language.eng.anunciar;
    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}