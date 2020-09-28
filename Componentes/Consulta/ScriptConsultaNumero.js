let ConfigTeclasConsultaNum = false;

const AlternarPaginaConsultaNumero = () => {
    $("#MenuConsultaNumero").fadeToggle(0);
    SetarTeclasConsultaNum();
    $("#NumeroConsulta").focus();
}

$("#NumeroConsulta").keypress((e) => {
    e.preventDefault();
    if ("0123456789".includes(e.key))
    NumeroConsulta.value += e.key;
});

const SetarTeclasConsultaNum = () => {
    if (!ConfigTeclasConsultaNum) {
        $(document).keypress((e) => {
            e.preventDefault();
            if (e.keyCode == 13) {
                if (NumeroConsulta.value != "")
                    $("#ConsultarNumero").click();
                else
                    $("#VoltarConsultaNumero").click();
            }
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasConsultaNum = !ConfigTeclasConsultaNum;
}

$("#ConsultarNumero").click(() => {
    if (NumeroConsulta.value != "") {
        const num = parseInt(NumeroConsulta.value);
        if (num > 0 && num <= Entradas.length) {
            ResultadoConsultaNumero.value = "";
            const ent = Entradas[num-1];
			ResultadoConsultaNumero.value += `\nNa partida de número ${num} de ${Entradas.length}:`;
            ResultadoConsultaNumero.value += `\nForam feitos ${ent.pontuacao} pontos;`;
            ResultadoConsultaNumero.value += `\n\nApós esta partida:`;
            ResultadoConsultaNumero.value += `\nO recorde mínimo era ${ent.mintemp} - o recorde máximo era ${ent.maxtemp};`;
            ResultadoConsultaNumero.value += `\nO recorde mínimo foi quebrado ${ent.quebrarecmin} ${(ent.quebrarecmin != 1) ? "vezes" : "vez"} -`;
            ResultadoConsultaNumero.value += ` o recorde máximo foi quebrado ${ent.quebrarecmax} ${(ent.quebrarecmax != 1) ? "vezes" : "vez"};`;
        }
        else
            alert(`Número de registro inválido, ${(Entradas.length === 1) ? "há somente 1 registro" : `deve ser de 1 à ${Entradas.length}`}`);
    }
});

$("#VoltarConsultaNumero").click(() => {
    AlternarPaginaConsultaNumero();
    NumeroConsulta.value = "";
    ResultadoConsultaNumero.value = "";
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});