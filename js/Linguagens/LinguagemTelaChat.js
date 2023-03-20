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
        // titulo e pesquisa
        conversas: "Your conversations",
        p: "Search for a user",
        campoEscrever: "Write a message here...",
        jaVendi: "Already sold",
        Ndisponivel: "No messages are available. When you send a message, it will appear here.",
        abrir: "Click on a conversation to open it.",
        historico: "This is the beginning of your conversation history with' . $row_2['sobrenome'] . '",
        livro: "User&nbsp;<b>' . $row_2['sobrenome'] . '</b>&nbsp;is looking to buy the book&nbsp; <?php //livro que eu apertei em 'chat' na tela de vizualizar o livro ?>",
        
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
        // titulo e pesquisa
        conversas.textContent = language.eng.conversas;
        p.placeholder = language.eng.p;
        campoEscrever.placeholder = language.eng.campoEscrever;
        jaVendi.textContent = language.eng.jaVendi;
        Ndisponivel.textContent = language.eng.Ndisponivel;
        abrir.textContent = language.eng.abrir;
        historico.textContent = language.eng.historico;
        livro.textContent = language.eng.livro;
        
    }
}
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function () {
        location.reload(true);
    };
}