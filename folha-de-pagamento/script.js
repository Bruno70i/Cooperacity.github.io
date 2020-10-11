function dividir() {
    var text1 = window.document.getElementById("textn1")
    var res = window.document.getElementById("res")
    var n1 = Number(text1.value)
    var horastrabn1 = window.document.getElementById("texthorastrab").value
    var s = n1 / horastrabn1
    var textdepn1 = window.document.getElementById("textdep")
    var depn1 = Number(textdepn1.value)
    var mesestrabn1 = window.document.getElementById("mesestrab").value

    //var mesestrabn1 = Number(mesestrabtext.value)
    // var s = Number.parseInt(s)
    // var s = s.toFixed(2).replace('.',',')
    var s = s.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var n1BRL = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    res.innerHTML = `O Salario de ${n1BRL} em horas serão: ${s}`
    
    // INSS ------------------------------------------------------------
    if (n1 <= 1045.00) {
        ninss2 = 78.38
    
    } else if (n1 >= 1045.01 && n1 <= 2089.60) {
        ninss = n1 - 1045.01
        nbr = ninss * 9 / 100
        ninss2 = nbr + 78.37

    } else if (n1 >= 2089.61 && n1 <= 3134.40) {
        ninss = n1 - 2089.61
        nbr = ninss * 12 / 100
        ninss2 = nbr + 172.38

    } else if (n1 >= 3134.41 && n1 <= 6101.06) {
        ninss = n1 - 3134.41
        nbr = ninss * 14 / 100
        ninss2 = nbr + 297.75

    } else if (n1 >= 6101.07) {
        ninss2 = 713.08
    }

    var ninssBRL = ninss2.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})
    rdivisao.innerHTML = `INSS: ${ninssBRL}`
    // INSS FIM ---------------------------------------------------------------------------------------

    // IRRF INICIO ------------------------------------------------------------------------------------
    var n1fgts = 8 * n1 / 100
    var rfgts = window.document.getElementById("FGTS")
    var fgtsBRL = n1fgts.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})
    
    FGTS.innerHTML = `FGTS: ${fgtsBRL}`

    var depn2 = depn1 * 189.59
    var rirrf = depn2 + ninss2
    var salbruto = n1 - rirrf
    

    if (salbruto <= 1903.98) {
        finalirrf = 0

    } else if (salbruto >= 1903.99 && salbruto <= 2826.65) {
        finalirrf = (salbruto * 7.5 / 100) - 142.80

    } else if (salbruto >= 2826.66 && salbruto <= 3751.05) {
        finalirrf = (salbruto * 15 / 100) - 354.80

    } else if (salbruto >= 3751.06 && salbruto <= 4664.68) {
        finalirrf = (salbruto * 22.5 / 100) - 636.13

    } else if (salbruto >= 4664.68 ) {
        finalirrf = (salbruto * 27.5 / 100) - 869.36 
    }

    var IRRF1 = window.document.getElementById("IRRF")

    var finalirrf = finalirrf.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    IRRF1.innerHTML = `IRRF:  ${finalirrf}`

    // IRRF FIM --------------------------------------------------------------------------------------
    
    // 13° Salario INICIO ----------------------------------------------------------------------------

    var mesestrabcalculo = (n1 / 12) * mesestrabn1
    var mesestrabresultado = mesestrabcalculo / 2
    var parcelan1 = (mesestrabcalculo * 8) / 100
    var parcela2 = mesestrabcalculo - parcelan1
    var parcela2resultado = parcela2 - mesestrabresultado
    var SALA1 = window.document.getElementById("SALA13")

    var mesestrabresultadoBRL = mesestrabresultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var parcela2resultado = parcela2resultado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    SALA1.innerHTML = `13° Salário: 1° Parc. ${mesestrabresultadoBRL} / 2°Parc. ${parcela2resultado}`

    // 13° Salario FIM -------------------------------------------------------------------------------


}


