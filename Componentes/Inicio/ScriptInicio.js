const AlternarPaginaInicio = () => {
    $("#Inicio").fadeToggle(500);
}

window.onload = () => {
    AlternarPaginaInicio();
	if (navigator.userAgent.includes("Chrome"))
		ResultadoConsultaNumero.rows = 8;
}

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