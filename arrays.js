//criar array
var frutas = ['Maçã', 'Banana','Ameixa','Caqui','Laranja','Limao']
console.log(frutas.length)

//acessar index
var primeiro = frutas[0]
console.log(primeiro)

//iterar array
frutas.forEach(function (item, indice, array){
    console.log(item, indice)
});

//adicionar ao final da lista
frutas.push('Laranja')
console.log(frutas)

//remover um item do final
frutas.pop();
console.log(frutas)

//remover do inicio
frutas.shift()
console.log(frutas)

//adicionar ao inicio
frutas.unshift('Caju')
console.log(frutas)

//procurar o indice de um item
console.log(frutas.indexOf('Banana'))

//remover item pela posicao do indice
console.log(`antes estava: ${frutas}`)
frutas.splice(0,3)
console.log(`depois ficou: ${frutas}`)