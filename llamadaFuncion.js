const modulo=require("./calcularIMC")

const pesoUsuario= 80;
const alturaUsuario = 1.55;

const imcUsuario = modulo.moduloCalcularIMC(pesoUsuario,alturaUsuario);

console.log("El valor del IMC es:" +imcUsuario.toFixed(2));
