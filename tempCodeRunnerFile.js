 var lista_user = [];

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
        console.log(lista_user);