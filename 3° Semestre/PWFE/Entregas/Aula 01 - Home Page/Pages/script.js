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