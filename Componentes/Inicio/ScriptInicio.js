let ConfigTeclasInicio = false;

const AlternarPaginaInicio = () => {
    $("#Inicio").fadeToggle(500);
    SetarTeclasInicio();
}

window.onload = () => {
    AlternarPaginaInicio();
	if (navigator.userAgent.includes("Chrome"))
		ResultadoConsultaNumero.rows = 8;
}

const SetarTeclasInicio = () => {
    if (!ConfigTeclasInicio) {
        $(document).keypress((e) => {
            e.preventDefault();
            switch (e.keyCode) {
                case 49: $("#Inserir").click(); break;
                case 50: $("#Consultar").click(); break;
                case 51: $("#Limpar").click(); break;
                case 52: $("#Sobre").click(); break;
                default: alert("Opção inválida!"); break;
            }
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasInicio = !ConfigTeclasInicio;
}

$("#Inserir").click(() => {
    AlternarPaginaInicio();
    $("title").html("Inserção de Dados");
    AlternarPaginaInsercao();
});

$("#Consultar").click(() => {
    AlternarPaginaInicio();
    $("title").html("Consulta");
    AlternarPaginaConsulta();
});

$("#Limpar").click(() => {
    let conf = confirm("Tem certeza que deseja excluir todas as entradas?");
    if (conf) {
        Entradas = [];
        MinimoTemp = 0;
        MaximoTemp = 0;
        alert("Todas as entradas foram removidas!");
    }
});

$("#Sobre").click(() => {
    if (navigator.userAgent.includes("Firefox")) {
        $("title").html("!!! Sobre !!!");
        alert("Desenvolvido por Adriano Andrei Goede\n\n         Microsoft Visual Studio Code\n\n             Debian 10.5 GNU/Linux");
        $("title").html("Bem Vindo(a)!");
    }
    else if (navigator.userAgent.includes("Chrome")) {
        $("title").html("!!! Sobre !!!");
        alert("Desenvolvido por Adriano Andrei Goede\nMicrosoft Visual Studio Code\nDebian 10.5 GNU/Linux");
        $("title").html("Bem Vindo(a)!");
    }
});