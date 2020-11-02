function verificar() {
    var n1 = window.document.getElementById("text1").value
    var n2 = window.document.getElementById("text2").value
    var res = window.document.getElementById("resultado")
    
    if (n2 == 1) {
        s = n1 * 600
        textres = "Papel"

    }   else if (n2 == 2) {
        s = n1 * 580
        textres = "Papelão"

    }   else if (n2 == 3 ) {
        s = n1 * 600 
        textres = "Plástico"

    } else if (n2 >= 3 || n2 <= 0) {
        res.innerHTML = `ERRO - NÃO TEMOS ESSE PRODUTO EM NOSSO SISTEMA!`
    } 

    var sBRL = s.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


    res.innerHTML = `A Solicitação é de: <strong>${n1} Toneladas </strong>, seu código é o <strong>N° ${n2}</strong> 
    sendo assim o produto <strong>${textres}</strong>. O Valor é de: <strong>${sBRL}</strong>`

}   