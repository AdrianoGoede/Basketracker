// Funções de configuração da página:

let ConfigTeclasConsulta = false;

const AlternarPaginaConsulta = () => {
    $("#Consulta").fadeToggle(500);
    AlternarElemsPaginaConsulta();
}

const AlternarElemsPaginaConsulta = () => {
    $("#MenuConsulta").fadeToggle(0);
    SetarTeclasConsulta();
}

const SetarTeclasConsulta = () => {
    if (!ConfigTeclasConsulta) {
        $(document).keypress((e) => {
            e.preventDefault();
            switch (e.keyCode) {
                case 13: $("#VoltarConsulta").click(); break;
                case 49: $("#PorNumero").click(); break;
                case 50: $("#MinMax").click(); break;
                case 51: $("#VerTabela").click(); break;
            }
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasConsulta = !ConfigTeclasConsulta;
}

// Configuração dos botões:

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