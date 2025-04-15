function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 39.9) {
        return "Obesidad";
    }
}

let pesoUsuario = 90;
let alturaUsuario = 1.20;
let imcUsuario = calcularIMC(pesoUsuario, alturaUsuario);
let interpretacion = interpretarIMC(imcUsuario);

console.log("El valor de IMC es: " + imcUsuario.toFixed(2));
console.log("Interpretación: " + interpretacion);



























setTimeout(() => {
    pesoUsuario = 95;
    alturaUsuario = 1.60;
    imcUsuario = calcularIMC(pesoUsuario, alturaUsuario);
    interpretacion = interpretarIMC(imcUsuario);
    console.clear();
    console.log("El valor de IMC es: " + imcUsuario.toFixed(2));
    console.log("Interpretación: " + interpretacion);
}, 3000);

