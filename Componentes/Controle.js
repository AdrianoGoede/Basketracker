let Entradas = [];
let MinimoTemp = 0;
let MaximoTemp = 0;

const AddEntrada = (valor) => {
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
    let entrada = new Object();
    entrada.pontuacao = valor;
    entrada.mintemp = MinimoTemp;
    entrada.maxtemp = MaximoTemp;
    Entradas.push(entrada);
}

const CalcularRecordes = () => {
    if (Entradas.length > 0) {
        let recmin = 0;
        let recmax = 0;
        Entradas[0].quebrarecmin = recmin;
        Entradas[0].quebrarecmax = recmax;
        for (let i = 1; i < Entradas.length; i++) {
            if (Entradas[i].pontuacao > Entradas[i-1].maxtemp)
                recmax++;
            else if (Entradas[i].pontuacao < Entradas[i-1].mintemp)
                recmin++;
        Entradas[i].quebrarecmin = recmin;
        Entradas[i].quebrarecmax = recmax;
        }
    }
}