//Dado que accedo a la página
//Cuando ingreso los tres números
//Veo cual número es el mayor

function encontrarMayor() {
   //constantes para recoger elementos del id del html
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    
  //Variable para almacenar el numero mayor
    let mayor = numero1;
   //Compara si numero2 es mayor que mayor(numero1) 
    if (numero2 > mayor) {
        mayor = numero2; //Si numero 2 es mayor, actualiza mayor con el valor de numero2
    }
    //Compara si n3 es mayor que mayor(actualizado paso anterior)
    if (numero3 > mayor) {
        mayor = numero3;//Si numero 3 es mayor, actualiza el valor
    }
    
 //Muestra cual es el mayor de los 3 numeros
    document.getElementById('resultado').innerText = `El mayor de los tres números es: ${mayor}`;
}
