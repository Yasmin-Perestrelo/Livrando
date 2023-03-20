// //recarregar âncoras de languagem 
var dataReload = document.querySelectorAll("[data-reload]");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        // -- Tela Construção -- //
        construcao: "Screen Under Construction",
        texto: "Sorry for the inconvenience, this screen is still under development. Thank you for understanding!",

        // -- Footer -- //
        anunciar2: "Announce",
        quemSomos: "Who are we?",
        faleConosco: "Talk to us",
        devolucoes: "Devolution",
        creditos: "© Livrando.com.br Search services on the Internet Ltda - CNPJ 00.000.000/0000-00<br>xxxxxxxxxx st., 000, 00 e 00 floors, Downtown, São Paulo/SP, CEP: 00000-000 - atendimento@livrando.com.br",
    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {

        // Footer
        quemSomos.textContent = language.eng.quemSomos;
        faleConosco.textContent = language.eng.faleConosco;
        devolucoes.textContent = language.eng.devolucoes;
        creditos.textContent = language.eng.creditos;
        anunciar2.textContent = language.eng.anunciar2;

        // login
        construcao.textContent = language.eng.construcao;
        texto.textContent = language.eng.texto;
    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}