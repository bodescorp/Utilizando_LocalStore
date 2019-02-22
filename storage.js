const lista_user = [];

function salvarConteudoStorage() {
    // verificando se a API de Storage está disponível
    if (typeof (Storage) !== "undefined") {


        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var git = document.getElementById("git").value;
        var imagem = document.getElementById("avatar").value;

        var Meuobj = {
            Nome: nome,
            Email: email,
            Github: git,
            Imagem: imagem,
        }
        lista_user.push(Meuobj);

        //salvar Objeto
        localStorage.setItem('Obj', JSON.stringify(lista_user));


    } else {
        window.alert("API Web Storage não encontrada");
    }
}

function exibir() {
    // Retrieve the object from storage
    var info = JSON.parse(localStorage.getItem('Obj'));
    console.log(localStorage);

    var Elementos = "";


    info.forEach(function (resul, index) {

        Elementos += "<p>Nome: <a href=useres.html#/" + index + ">" + resul.Nome + "</a> Email: " + resul.Email + "</p>"

    });
    var tela = document.getElementById("exibir").innerHTML = Elementos;

}

function dados_useres() {
    var id = window.location.hash.slice(2)

    console.log(id)

    var person = JSON.parse(localStorage.getItem('Obj'));
    person[id];
    console.log(person[id].Imagem);

    document.getElementById("jpg").scr = person[id].Imagem
    

    Elementos1 = "Nome:" + person[id].Nome + "</p>"
    Elementos1 += " Email: " + person[id].Email + "</p>"
    Elementos1 += " Git-Hub: " + person[id].Github + "</p>"
    var tela = document.getElementById("info_user").innerHTML = Elementos1;

}