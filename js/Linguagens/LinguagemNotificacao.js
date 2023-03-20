// //recarregar âncoras de languagem 
var dataReload = document.querySelectorAll("[data-reload]");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        // -- Tela Notificação -- //
        notificacao: "Notifications",
        btnrecomendacoes: "Recommendations of books near you",
        btnconfirmacao: "Purchase confirmation"

    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {

        // login
        notificacao.textContent = language.eng.notificacao;
        btnrecomendacoes.textContent = language.eng.btnrecomendacoes;
        btnrecomendacoes.textContent = language.eng.btnconfirmacao;
    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}