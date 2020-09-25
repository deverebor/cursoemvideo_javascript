//O parâmetro new Date() possibilita a utilização do getHours(). Fazendo com que seja possível pegar a hora exata do sistema.
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são extamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}