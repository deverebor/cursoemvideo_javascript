//Condições Aninhadas, utilizando if; else e else if.
var idade = 10

console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não vota.')
} else if (idade < 18 || idade > 65) { //Idade menor que 18 ou idade maior que 65 *Voto opicional*
    console.log('Seu voto é Opcional.')
} else {
    console.log('Seu voto é obrigatório.')
}