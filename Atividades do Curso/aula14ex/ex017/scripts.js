function contar() {
    let ini = document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO]: Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Condição para caso o valor do início < fim, ou seja, se o inicio for menor que o fim. Ele vai execultar a contagem crescente, caso não seja menor que o fim ele faz a contagem regressiva.
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1.')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` // O += é para concatenação.
            }

        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}