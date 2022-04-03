function calcular(){
    var altura = document.getElementById("altura").value
    var peso = document.getElementById("peso").value

    var alturaemcm =  altura / 100
    
    var imc = peso / alturaemcm ** 2
    
    
    var text = ""
    if(imc < 18.5) {
        text=`Seu IMC é de ${imc.toFixed(1)}. Você está magro.`
    } else if (imc < 24.9) {
        text=`Seu IMC é de ${imc.toFixed(1)}. Você está no peso ideal`
    } else if (imc < 29.9) {
        text=`Seu IMC é de ${imc.toFixed(1)}. Você está com sobrepeso`
    } else if (imc < 39.9){
        text= `Seu IMC é de ${imc.toFixed(1)}. Você está obeso!!`
    } else if (imc > 39.9){
        text= `Seu IMC é de ${imc.toFixed(1)}. Você está com obesidade grave`
    }

   

document.getElementById("resultado").innerText = text
}
