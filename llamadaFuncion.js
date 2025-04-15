const modulo=require("./calcularIMC")



const pesoUsuario= 80;

const alturaUsuario= 1.54;

const imcUsuario = modulo.moduloCalcularIMC(pesoUsuario,alturaUsuario);



//imcUsuario.toFixed(2);

if (imcUsuario < 18.5)

  {

    console.log("El valor del IMC es :" + imcUsuario.toFixed(2) + "se considera peso insuficiente");

}

else if (imcUsuario >=18.5 && imcUsuario <= 24.9) {

  console.log("El valor del IMC es :" + imcUsuario.toFixed(2) + "se considera saludable");

}

else if (imcUsuario >=25 && imcUsuario <= 29.9){

  console.log("El valor del IMC es :" + imcUsuario.toFixed(2) + "se considera obesidad");

}

  else

  {

   console.log("el valor del imc es: "+ imcUsuario.toFixed(2) + " Tienes obesidad.");

  }