// Estruturas de dados:

let Entradas = [];
let MinimoTemp = 0;
let MaximoTemp = 0;

// Funções:

const AddEntrada = (valor) => {
    // Atualizar mínimo e máximo:
    if (Entradas.length == 0) {
        MinimoTemp = valor;
        MaximoTemp = valor;
    }
    else {
        if (valor < MinimoTemp)
            MinimoTemp = valor;
        else if (valor > MaximoTemp)
            MaximoTemp = valor;
    }
    // Adicionar objeto:
    let entrada = new Object();
    entrada.pontuacao = valor;
    entrada.mintemp = MinimoTemp;
    entrada.maxtemp = MaximoTemp;
    Entradas.push(entrada);
}

const CalcularRecordes = () => {
    if (Entradas.length > 0) {
        // Número de vezes que cada recorde foi quebrado:
        let recmin = 0;
        let recmax = 0;
        Entradas[0].quebrarecmin = recmin;
        Entradas[0].quebrarecmax = recmax;
        // Incrementar cada variável quando seu devido recorde for quebrado:
        for (let i = 1; i < Entradas.length; i++) {
            if (Entradas[i].pontuacao > Entradas[i-1].maxtemp)
                recmax++;
            else if (Entradas[i].pontuacao < Entradas[i-1].mintemp)
                recmin++;
        // Adiconar os valores à cada entrada:
        Entradas[i].quebrarecmin = recmin;
        Entradas[i].quebrarecmax = recmax;
        }
    }
}