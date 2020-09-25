function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //Vai puxar o conteúdo que está no id txtano
    var res = document.querySelector('div#res') //Vai puxar o id da div res.

    //A primeira condição vê se o valor dentro da caixa é igual a 0. Se o segundo valor da caixa é maior que a variável ano ele vai mostrar a mesma mensagem de erro, eu defini como Number(fano.value) para fazer a conversão para número e o JS conseguir diferenciar. É importante fazer isso pois evita problemas na aplicação e deixa semanticamente melhor. Caso obedeça essas regras, vai mostrar outra mensagem.
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]: Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //[0] = Homem [1] Mulher.
        var idade = ano - Number(fano.value)
            //Criei abaixo a variavel gênero que começa vazia pois vai receber os valores da marcação do site. Logo após eu criei uma condição para isso, cado a marcação da posição [0] que é HOMEM estiver marcado a variável gênero vai receber essa marcação. Caso seja a [1] MULHER a variável gênero vai armazenar esse valor.
        var genero = ''
        var img = document.createElement('img') //Criei um <img/> no meu documento html
        img.setAttribute('id', 'foto') //dei um id para esse <img> ficando <img id='foto'/>. Seria a mesma coisa de ir no documento html e criar lá.
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocrianca-homem.png') // Aqui eu coloco um atributo para a img, que vai receber uma foto, no caso de um criança.
            } else if (idade < 21) { //Se não está entre 0 e 10 está acima de 10
                //Jovem
                img.setAttribute('src', 'fotojovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadulto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocrianca-mulher.png')
            } else if (idade < 21) { //Se não está entre 0 e 10 está acima de 10
                //Jovem
                img.setAttribute('src', 'fotojovem-mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoadulto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}