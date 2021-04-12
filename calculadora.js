const calcular = () => {
    return{
        soma: (n1, n2) => {
            return n1 + n2;
        },
        subtrair: (n1, n2) => {
            return n1 - n2;
        }
    }
}

const somar = (v1 =  0 , v2 = 0) => {
    console.log(v1+v2)
    return v1 + v2
}

function multiplicar (v1 = 0, v2 = 0 ){
    return v1 * v2
}

somar (1,2)
module.exports = calcular;