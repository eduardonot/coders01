var cliente = {
    nome: "Eduardo",
    sobrenome: "Lourenco",
    idade: 27,
    nomeCompleto : function(){
        return this.nome + " " + this.sobrenome
    }
};
var clienteName = cliente.nomeCompleto();
function checaCadastro(){
    if (cliente.idade >= 18) {
        console.log(`Seu cadastro foi realizado com sucesso! Seja bem-vindo, ${clienteName}`)
    }else{
        console.log("Você precisa ter 18 anos para completar o cadastro!")
    }
}
checaCadastro()