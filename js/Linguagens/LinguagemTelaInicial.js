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

        // carrosel
        procurados: "Most searched books:",
        recentes: "Recently added books:",
        melhorAutor: "Best-selling authors:",
        recomendações: "Livrando's recommendations",
        top1: "Best announcers and customers",
        vendas: "Highest number of sales this month",
        compra: "Highest number of purchases this month",
        vendas2: "Highest number of sales this month",
        compra2: "Highest number of purchases this month",
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

        // carrosel 
        procurados.textContent = language.eng.procurados;
        recentes.textContent = language.eng.recentes;
        melhorAutor.textContent = language.eng.melhorAutor;
        recomendações.textContent = language.eng.recomendações;
        top1.textContent = language.eng.top1;
        vendas.textContent = language.eng.vendas;
        compra.textContent = language.eng.compra;
        vendas2.textContent = language.eng.vendas2;
        compra2.textContent = language.eng.compra2;

    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}