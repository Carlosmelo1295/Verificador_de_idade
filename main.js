function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var $ano = window.document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if ($ano.value.length == 0 || Number($ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number($ano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'kidman.png')
            } else if (idade < 49) {
                //jovem
                img.setAttribute('src', 'youngman.png')
            } else if (idade >= 50) {
                //adulto
                img.setAttribute('src', 'oldman.png')
            }
        } else if (fsexo[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'kidwoman.png')
            } else if (idade < 49) {
                //jovem
                img.setAttribute('src', 'youngwoman.png')
            } else if (idade >= 50) {
                //adulto
                img.setAttribute('src', 'ondwoman.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}