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
        // titulo e isbn
        venda: "Sell books",
        isbn: "enter the ISBN",
        //titulo
        tituloLivro: "Book's title",
        titulo: "enter the book's title",
        //autor
        autorLivro: "Author",
        autor: "enter the author",
        //editora
        editoraLivro: "Publisher",
        editora: "enter the publisher",
        //dica
        dica1: "Tip: For multiple authors, separate the names by &. Ex: Author x & Author xx",
        //genero livro
        generoLivro: "Book genre",
        //estado do livro
        estadoLivro: "State of the book",
        estado: "enter the state of the book",
        novo: "Brand new",
        seminovo: "New",
        usado: "Used",
        //idioma
        idiomaLivro: "Language",
        idioma: "enter the language",
        portugues: "Portuguese",
        ingles: "English",
        espanhol: "Spanish",
        //data lançamento
        lançamento: "Book release date",
        dataLanc: "enter the book release date",
        //n° pags livros
        paginasLivro: "Number of pages",
        paginas: "enter the total number of pages",
        //preço
        precoLivro: "Price",
        preco: "enter book price",
        //descrição estado do livro
        descEstadoLivro: "Description of the Status of the Book",
        descEstado: "type the state the book is in",
        //dica
        dica2: "Tip: Describe your book. Ex: Used book with worn hardcover; spine and first ear in perfect condition; second ear has erasures; etc.",
        //resumo do livro
        resumoLivro: "Book History Summary",
        resumo: "type a short synopsis of the book",
        //dica3
        dica3: "Tip: Do not give spoilers; make a summary neither too long nor too short; grab users' attention, but don't invent things that aren't part of the story.",
        //biografia do autor
        biografiaAutor: "Author's biography",
        biografia: "enter the author's biography",
        //img livro
        imgLivro: "Book images",
        imagem: "",
        //botão enviar
        submit: "Register Book"
    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {
        //Footer
        quemSomos.textContent = language.eng.quemSomos;
        faleConosco.textContent = language.eng.faleConosco;
        devolucoes.textContent = language.eng.devolucoes;
        creditos.textContent = language.eng.creditos;
        anunciar2.textContent = language.eng.anunciar2;

        // campos e placeholders
        // titulo e isbn
        venda.textContent = language.eng.venda;
        isbn.placeholder = language.eng.isbn;

        tituloLivro.textContent = language.eng.tituloLivro;
        titulo.placeholder = language.eng.titulo;

        autorLivro.textContent = language.eng.autorLivro;
        autor.placeholder = language.eng.autor;

        editoraLivro.textContent = language.eng.editoraLivro;
        editora.placeholder = language.eng.editora;

        dica1.textContent = language.eng.dica1;

        generoLivro.textContent = language.eng.generoLivro;

        estadoLivro.textContent = language.eng.estadoLivro;
        novo.textContent = language.eng.novo;
        seminovo.textContent = language.eng.seminovo;
        usado.textContent = language.eng.usado;
        estado.placeholder = language.eng.estado;

        idiomaLivro.textContent = language.eng.idiomaLivro;
        portugues.textContent = language.eng.portugues;
        ingles.textContent = language.eng.ingles;
        espanhol.textContent = language.eng.espanhol;
        idioma.placeholder = language.eng.idioma;

        lançamento.textContent = language.eng.lançamento;
        dataLanc.placeholder = language.eng.dataLanc;

        paginasLivro.textContent = language.eng.paginasLivro;
        paginas.placeholder = language.eng.paginas;

        precoLivro.textContent = language.eng.precoLivro;
        preco.placeholder = language.eng.preco;

        descEstadoLivro.textContent = language.eng.descEstadoLivro;
        descEstado.placeholder = language.eng.descEstado;

        dica2.textContent = language.eng.dica2;

        resumoLivro.textContent = language.eng.resumoLivro;
        resumo.placeholder = language.eng.resumo;

        dica3.textContent = language.eng.dica3;

        biografiaAutor.textContent = language.eng.biografiaAutor;
        biografia.placeholder = language.eng.biografia;

        imgLivro.textContent = language.eng.imgLivro;
        imagem.placeholder = language.eng.imagem;
        
        submit.value = language.eng.submit;

    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}