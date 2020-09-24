const AlternarTabela = () => {
    ConstruirTabela();
    $("#Tabela").fadeToggle(0);
}

const ConstruirTabela = () => {
    $("#CorpoTabela").html("");
    for (let i = 0; i < Entradas.length; i++) {
        const ent = Entradas[i];
        $("#CorpoTabela").append(`<tr>
        <th scope="row">${i+1}</th>
        <td>${ent.pontuacao}</td>
        <td>${ent.mintemp}</td>
        <td>${ent.maxtemp}</td>
        <td>${ent.quebrarecmin}</td>
        <td>${ent.quebrarecmax}</td>
        </tr>`);
    }
}

$("#VoltarConsultaTabela").click(() => {
    AlternarTabela();
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});