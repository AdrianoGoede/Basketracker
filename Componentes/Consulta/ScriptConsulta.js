const AlternarPaginaConsulta = () => {
    $("#Consulta").fadeToggle(500);
    AlternarElemsPaginaConsulta();
}

const AlternarElemsPaginaConsulta = () => {
    $("#MenuConsulta").fadeToggle(0);
}

$("#PorNumero").click(() => {
    if (Entradas.length > 0) {
        AlternarElemsPaginaConsulta();
        $("title").html("Consulta por Número");
        AlternarPaginaConsultaNumero();
    }
    else
        alert("Ainda não há registros!");
});

$("#MinMax").click(() => {
        AlternarElemsPaginaConsulta();
        $("title").html("Mínimo & Máximo da Temporada");
        AlternarPaginaConsultaMinMax();
});

$("#VerTabela").click(() => {
    if (Entradas.length > 0) {
        AlternarElemsPaginaConsulta();
        $("title").html("Tabela");
        AlternarTabela();
    }
    else
        alert("Ainda não há registros!");
});

$("#VoltarConsulta").click(() => {
    AlternarPaginaConsulta();
    $("title").html("Bem Vindo(a)!");
    AlternarPaginaInicio();
});