//função que recebe o nome, email, idade, ativo (true e false) de um usuário
// armazenar em uma lista com 6 usuários
// criar uma função que retorne apenas os usuários ativos 

const usuarios = [
    {nome: "Eduardo", email:"email1@hotmail.com", idade:22, isActive: true}, 
    {nome: "Ana", email:"email2@hotmail.com", idade:33, isActive: false}, 
    {nome: "Thiago", email:"email3@hotmail.com", idade:44, isActive: true}, 
    {nome: "Victor", email:"email4@hotmail.com", idade:55, isActive: false}, 
    {nome: "Jaira", email:"email5@hotmail.com", idade:66, isActive: true}, 
    {nome: "Vampa", email:"email6@hotmail.com", idade:77, isActive: false}
]

//METODO UM
resultado = usuarios.filter(estado => estado.isActive == true)
console.log(resultado)

//METODO DOIS
function exibeAtivos(userName, indice){
    if(usuarios[indice].isActive == true){
        console.log(usuarios[indice].nome + " está ativo!")
    }
}
usuarios.forEach(exibeAtivos)