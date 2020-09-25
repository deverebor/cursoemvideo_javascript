function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma())
    //Caso eu não coloque um valor na segunda posição, ou seja, fique console.log(soma(2)) ele vai me retornar NaN(Not a Number) já que eu não defini meu segundo parâmetro, o valor se torna 'undefined' e em JavaScriptum número + undefined = NaN. Porém se eu definir um valor padrão para meus parâmetros ele vai me retornar um cálculo. EX: function soma(n1 = 0, n2 = 0), se n1 não for passado vai ser valorado como 0, se n2 não for passado vai ser valoraco como 0, ai sim ele me retorna um cálculo mesmo definindo somente um valor. Se eu deixar vazio e não definir nada EX: console.log(soma()) ele vai me retornar a soma dos valores padrões.