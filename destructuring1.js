const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // tirando as variaveis de dentro da estrutura
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa 
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(numero, cep, logradouro)

// const { conta: { ag, nume } } = pessoa
// console.log(nume, ag)