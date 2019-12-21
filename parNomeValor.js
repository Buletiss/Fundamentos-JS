// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'falae'
    return saudacao
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idadde: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)