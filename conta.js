const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let reposta = ""
let numContas = 0
let valTotal = 0

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const decricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal = valTotal + valor
    reposta = reposta + decricao + "-R$:" + valor.toFixed(2) + "\n"
    resp1.innerText = `${reposta}----------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})