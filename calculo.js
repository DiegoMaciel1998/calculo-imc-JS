document.getElementById('btn').addEventListener('click', () => {
    
    let nome = document.getElementById('txt_nome').value
    let altura = parseFloat(document.getElementById('txt_altura').value)
    let peso = parseFloat(document.getElementById('txt_peso').value)
    let res = document.getElementById('res')
    let imc = peso / (altura * altura)
    let classificacao

    if (imc <= 18.5) {
        classificacao = 'Magreza'

    } else if (imc >= 18.5 && imc <= 24.8) {
        classificacao = 'Normal'

    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = 'Sobrepeso'

    } else if (imc >= 30.0 && imc <= 39.9) {
        classificacao = 'Obesidade'

    } else {
        classificacao = 'Obesidade grave'
    }

    res.innerHTML = `Olá ${nome}, o seu IMC é: ${imc.toFixed(2)} e sua classificação é: ${classificacao}`

})




