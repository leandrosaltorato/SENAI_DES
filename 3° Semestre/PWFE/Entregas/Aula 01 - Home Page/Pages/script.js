function salarial(){
    let salario = Number(document.getElementById('salario').value)
    let resultado = document.getElementById('resultado');
    let bonus = 0;


    if(salario > 2000 ){
        bonus = salario * (10 / 100);
    }
    
    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
        `Bonus de R$ ${bonus.toFixed(2)} <br>Preço Final R$ ${salarioFinal.toFixed(2)}`;
}

document.getElementById('salario').addEventListener("keypress", function (event){
    if(event.key === "Enter"){
        salarial();
    }
})

function fretes(){
    let compra = Number(document.getElementById('compra').value)
    let resultadoFrete = document.getElementById('resultadoFrete');
    let frete = 0;


    if(compra < 150 ){
        frete = 0;
    } else {
        frete = 20;
    }
    
    let freteFinal = compra + frete;

    resultadoFrete.innerHTML = 
        `Frete de R$ ${frete.toFixed(2)} <br>Preço Final R$ ${freteFinal.toFixed(2)}`;
}




function combustivel(){
    let abastecido = Number(document.getElementById('abastecido').value)
    let resultadoCombustivel = document.getElementById('resultadoCombustivel');
    let desconto = 0;


    if(abastecido > 200 ){
        desconto = abastecido * (5 / 100);;
    }
    
    let descontoFinal = abastecido - desconto;

    resultadoCombustivel.innerHTML = 
        `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${descontoFinal.toFixed(2)}`;
}



function serviço(){
    let conta = Number(document.getElementById('conta').value);
    let resultadoTaxa = document.getElementById('resultadoTaxa');
    let taxa = 0;


    if(conta > 100 ){
        taxa = conta * (10 / 100);
    }
    
    let taxaFinal = conta + taxa;

    resultadoTaxa.innerHTML = 
        `Taxa de R$ ${taxa.toFixed(2)} <br>Preço Final R$ ${taxaFinal.toFixed(2)}`;
}


function multa(){
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let dias = Number(document.getElementById('dias').value);
    let resultadoMulta = document.getElementById('resultadoTaxa');
    let multas = 0;


    if(dias > 0 ){
        multas = mensalidade * (2 / 100);
    }
    
    let multaFinal = mensalidade + multas;

    resultadoMulta.innerHTML = 
        `Multa de R$ ${multas.toFixed(2)} <br>Preço Final R$ ${multaFinal.toFixed(2)}`;
}


function cashback(){
    let comprac = Number(document.getElementById('comprac').value);
    let resultadoCash = document.getElementById('resultadoCash');
    let cashback = 0;


    if(comprac > 300 ){
        cashback = comprac * (5 / 100);
    }
    
    let cashbackFinal = comprac - cashback;

    resultadoCash.innerHTML = 
        `Cashback de R$ ${cashback.toFixed(2)} <br>Preço Final R$ ${cashbackFinal.toFixed(2)}`;
}



