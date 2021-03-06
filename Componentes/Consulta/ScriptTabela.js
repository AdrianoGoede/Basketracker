// Funções de configuração da página:

let ConfigTeclasConsultaTabela = false;

const AlternarTabela = () => {
    ConstruirTabela();
    $("#Tabela").fadeToggle(0);
    SetarTeclasConsultaTabela();
}

const SetarTeclasConsultaTabela = () => {
    if (!ConfigTeclasConsultaTabela) {
        $(document).keypress((e) => {
            e.preventDefault();
            if (e.keyCode == 13)
                $("#VoltarConsultaTabela").click();
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasConsultaTabela = !ConfigTeclasConsultaTabela;
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

// Configuração dos botões:

$("#VoltarConsultaTabela").click(() => {
    AlternarTabela();
    $("title").html("Consulta");
    AlternarElemsPaginaConsulta();
});