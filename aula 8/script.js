var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = (peso/(altura*altura));
    if(imc<17){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = '<br> Seu resultado foi: '+imc.toFixed(2) + '<h3> muito abaixo do peso<h3>';
        return false;
    }else if(imc>17 && imc < 18.49){
        resultado = document.getElementById("resultado")
        resultado.innerHTML = '<br> Seu resultado foi: '+imc.toFixed(2) + '<h3> voce esta abaixo do peso<h3>';
        return false;
    }else if(imc>18.5 && imc<24.99){
        resultado = document.getElementById("resultado")
        resultado.innerHTML = '<br> Seu resultado foi: '+imc.toFixed(2) + '<h3> normal<h3>';
        return false;
    }else if(imc > 25 && imc<29.99){
        resultado = document.getElementById("resultado")
        resultado.innerHTML = '<br> Seu resultado foi: '+imc.toFixed(2) + '<h3> acima do peso<h3>';
        return false;
    }else{
    return false;
    }
}