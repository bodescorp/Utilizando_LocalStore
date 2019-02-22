const lista_user = [];

function salvarConteudoStorage() {
    // verificando se a API de Storage está disponível
    if (typeof (Storage) !== "undefined") {
        

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var profissao = document.getElementById("profissao").value;
        var imagem = document.getElementById("avatar").value;

        var Meuobj = {
            Nome: nome,
            Email: email,
            Profissao: profissao,
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
        
        Elementos += "<p>Nome: <a href=useres.html"+ index +">"+resul.Nome+"</a></p>"
        Element += ""

    });
    var tela = document.getElementById("exibir").innerHTML = Elementos;

}