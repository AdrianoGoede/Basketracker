const AlternarTabela = () => {
    $("#Tabela").fadeToggle(0);
}

$("#VoltarConsultaTabela").click(() => {
    AlternarTabela();
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});