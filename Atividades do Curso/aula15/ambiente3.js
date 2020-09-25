let num = [5, 8, 2, 9, 3] //Criando meu arry, se usa [] "colchetes"
num[5] = 7 //Define a casa que eu quero onde meu array vá.
num.push(8) //Coloca um valor na última casa do meu array.


console.log(`Nosso vetor é o ${num}. Ele tem ${num.length} de comprimento. E ordenado em ordem crescente ele fica ${num.sort()}`)
    //Utilizo o .indexOf() para procurar valores dentro da minha array. Quando não possuir o valor que eu estou pendindo dentro da minha array ele sempre vai me retornar -1, ou seja, sempre que eu requisitar um valor inexistente dentro da minha array ele vai me retonar -1.

//A estrutura abaixo só foi encrementado uma condição para que mostre uma mensagem de erro caso não possua um valor que está sendo requisitado dentro da minha array.
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('[ERRO]:: O valor não foi encontrado.')
} else {
    console.log(`O vlalor 8 está na posição ${pos}.`)
}

//console.log(num[4])
//console.log(num.length) //Mostra o comprimento da minha array.
//console.log(num.sort()) //Pega todos os elementos e põem em ordem crescente.