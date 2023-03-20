// //recarregar âncoras de languagem 
var dataReload = document.querySelectorAll("[data-reload]");

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

var language = {
    eng: {
        // -- Footer -- //
        anunciar2: "Announce",
        quemSomos: "Who are we?",
        faleConosco: "Talk to us",
        devolucoes: "Devolution",
        creditos: "© Livrando.com.br Search services on the Internet Ltda - CNPJ 00.000.000/0000-00<br>xxxxxxxxxx st., 000, 00 e 00 floors, Downtown, São Paulo/SP, CEP: 00000-000 - atendimento@livrando.com.br",


        // -- Tela Inicial -- //
        // filtros
        filtrar: "Filter books",
        localização: "Location:",
        pertoMim: "Close to me",
        estadoLivro: "Book conditions:",
        novo: "Brand new",
        seminovo: "New",
        usado: "Used",
        categoria: "Book categories:",
        técnico: "Technical",
        brasileira: "Brasilian Literature",
        estrangeira: "Foreign Literature",
        infantil: "Children's book",
        autor: "Author:",
        editora: "Publisher:",
        preço: "Price:",
        ano: "Year of release:",
        buscar: "Search",

        // resultados
        resultados: "Results for: ",
        autor2: "Author: ",
        editora2: "Publisher: ",
        vendedor: "Seller: ",
        novo2: "Brand new",
        seminovo2: "New",
        usado2: "Used",
        visualizar: "View book"
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

        // filtros
        filtrar.textContent = language.eng.filtrar;
        localização.textContent = language.eng.localização;
        pertoMim.textContent = language.eng.pertoMim;
        estadoLivro.textContent = language.eng.estadoLivro;
        novo.textContent = language.eng.novo;
        seminovo.textContent = language.eng.seminovo;
        usado.textContent = language.eng.usado;
        categoria.textContent = language.eng.categoria;
        técnico.textContent = language.eng.técnico;
        brasileira.textContent = language.eng.brasileira;
        estrangeira.textContent = language.eng.estrangeira;
        infantil.textContent = language.eng.infantil;
        autor.textContent = language.eng.autor;
        editora.textContent = language.eng.editora;
        preço.textContent = language.eng.preço;
        ano.textContent = language.eng.ano;
        buscar.textContent = language.eng.buscar;

        // resultados
        resultados.textContent = language.eng.resultados;
        autor2.textContent = language.eng.autor2;
        editora2.textContent = language.eng.editora2;
        vendedor.textContent = language.eng.vendedor;
        novo2.textContent = language.eng.novo2;
        seminovo2.textContent = language.eng.seminovo2;
        usado2.textContent = language.eng.usado2;
        visualizar.textContent = language.eng.visualizar;



    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}