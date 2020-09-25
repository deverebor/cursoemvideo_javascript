/*Essa função funciona da seguinte maneira:
Eu criei uma função parimp, dentro do parimp eu dei um parâmetro chamado 'n'. logo após eu pedi pra que execultasse uma ação que é minha estrutura 'if else'. Essa ação vai retornar algo, que no caso é falar se o número é par ou ímpar. Para que essa função seja execultada eu faço uma chamada, que é o meu 'let res = parimp(valor)'. ****EM JAVASCRIPT UMA FUNÇÃO SÓ PODE TER 1 RETORNO**** Nesse caso o retorno vai ser definido pelo valor de 'parimp()' Se for positivo retorna 'Par!' se não 'Ímpar!'.
*/

function parimp(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

/*Posso mostrar o resultado usando uma variável ou somente usando um console.log
let res = parimp(4)
console.log(res)
*/
console.log(parimp(223))