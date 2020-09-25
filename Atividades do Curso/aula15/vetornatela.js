let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //Organizou meu array em valor crescente.

//console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

//Criei a variável pos e dei o valor de 0 pra ela. Logo após eu disse que enquanto pos for menor que o tamanho da minha array, vai encrementar +1 na variável pos. Fazendo com que mostre todos os valores dentro da minha array sem ter que usar varios console.log.

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/
//Percuso para exebição de um vetor.
/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
/*Esse 'for in' é otimizado para variáveis compostas(arrays) e objetos. Todo array no JS é um objeto.
Essa estrutura se ler assim: Para cara posição dentro em valores, eu vou mostar o valores[pos]
for (let pos in valores) {
    console.log(valores[pos])
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}