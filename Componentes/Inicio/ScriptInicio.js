// Funções de configuração da página:

let ConfigTeclasInicio = false;

const AlternarPaginaInicio = () => {
    $("#Inicio").fadeToggle(500);
    SetarTeclasInicio();
}

window.onload = () => {
    AlternarPaginaInicio();
    // Ajustes para navegadores específicos:
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
            }
        });
    }
    else
        $(document).off("keypress");
    ConfigTeclasInicio = !ConfigTeclasInicio;
}

// Configuração dos botões:

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
    if (Entradas.length > 0) {
        const conf = confirm("Tem certeza que deseja remover todas as entradas?");
        if (conf) {
            Entradas = [];
            MinimoTemp = 0;
            MaximoTemp = 0;
            alert("Todas as entradas foram removidas!");
        }
    }
    else
        alert("Não há entradas para remover!");
});

$("#Sobre").click(() => {
    $("title").html("!!! Sobre !!!");
    alert("Desenvolvido por Adriano Andrei Goede!");
    if (navigator.userAgent.includes("Firefox")) {
        let msg = "Testado nos seguintes Navegadores:\n\n       Mozilla Firefox - versão 81.0\n    Google Chrome - versão - 85.0\n          Chromium - versão 83.0\n             Opera - versão 71.0";
        msg += "\n\n              Nos seguintes SO's:\n\n           Windows 7 SP1 64 bits\n     Debian 10.6 GNU/Linux 64 bits";
        alert(msg);
    }
    else if (navigator.userAgent.includes("Chrome")) {
        let msg = "Testado nos seguintes Navegadores:\n\n-Mozilla Firefox - versão 81.0\n-Google Chrome - versão - 85.0\n-Chromium - versão 83.0\n-Opera - versão 71.0";
        msg += "\n\nNos seguintes SO's:\n\n-Windows 7 SP1 64 bits\n-Debian 10.6 GNU/Linux 64 bits";
        alert(msg);
    }
    $("title").html("Bem Vindo(a)!");
});