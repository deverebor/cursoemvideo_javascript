function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, dite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            //comando creatElement é usado para criar elementos dentro de documentos html, nesse caso dentro de um select.
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }

    }

}