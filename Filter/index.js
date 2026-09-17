const numeros = [5, 10, 15, 20, 25, 30];

const numerosComFilter = numeros.filter((numero, index) => {
    console.log(`numero: ${numero}, index: ${index}`)
    return numero === 5
})

console.log(numerosComFilter)