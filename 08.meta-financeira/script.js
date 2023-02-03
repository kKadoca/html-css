let res = document.getElementById('res')
let num = document.getElementById('txtn')
let med = document.getElementById('container')
let valorTotal = null
let metaFinal = 50000

function start() {
    valorTotal = Number(localStorage.getItem('total'))
    res.innerHTML = `Total: ${valorTotal} reais`
    atualizarTamanho()
}

function adicionar() {
    let valorAdicionado = Number(num.value)
    valorTotal += valorAdicionado

    res.innerHTML = `Total: ${valorTotal} reais`
    atualizarTamanho()

    persistir()
}

function persistir() {
    localStorage.setItem('total', `${valorTotal}`)
}

function atualizarTamanho() {
    let razaoTamanho = valorTotal / metaFinal
    let novoTamanho = (razaoTamanho * 710).toFixed(2)
    med.style.height = novoTamanho + 'px'
}

function mostrar() {
    res.style.display = 'unset'
}