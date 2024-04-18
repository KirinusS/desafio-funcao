const derrotasVitorias = function (derrota, vitoria, rank) {
    return derrota - vitoria

    if (vitoria < 10) {
        rank = 'Ferro'
    } else if (vitoria >= 11 && vitoria <= 20) {
        rank = 'Bronze'
    } else if (vitoria >= 21 && vitoria <= 50) {
        rank = 'Prata'
    } else if (vitoria >= 51 && vitoria <= 80) {
        rank = 'Ouro'
    } else if (vitoria >= 81 && vitoria <= 90) {
        rank = 'Diamante'
    } else if (vitoria >= 91 && vitoria <= 100) {
        rank = 'Lendário'
    } else (vitoria >= 101)
    rank = 'Imortal'
}

let resultado = derrotasVitorias(50, 25)

console.log(resultado)
