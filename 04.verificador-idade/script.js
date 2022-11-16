function verificar() {
    var data = new Date()
    var ano = data.getFullYear()                    // ano atual
    var fano = document.getElementById('txtano')    // ano digitado
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')     // criando a imagem dinamicamente
        img.setAttribute('id', 'foto')              // atribuindo id a imagem
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'images/nene-masc.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-masc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-masc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'images/nene-fem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'images/jovem-fem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'images/adulto-fem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'images/idoso-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}