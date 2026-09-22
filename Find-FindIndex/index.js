const pessoas = [
    {
        nome: 'John', idade: 18,
    },
    {
        nome: 'Jane', idade: 20,
    },
    {
        nome: 'Jane', idade: 24,
    },
]

const john = pessoas.find((item) => {
    return item.nome === 'John'
});

console.log(john)

const janeIndex = pessoas.findIndex((item) => {
    return item.nome === 'Jane'
})

console.log(`Index: ${janeIndex}`)