//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo si el numero ingresado en el formulario es o no primo

function verificarNumeroPrimo() {
    // Obtiene el valor del input con id 'numero' que contiene el número ingresado por el usuario
    const numero = parseInt(document.getElementById('numero').value);

    // Verifica si el número ingresado no es válido (no es un número o es menor o igual a 1)
    if (isNaN(numero) || numero <= 1) {
        // Muestra un mensaje en el elemento con id 'resultado' indicando que se ingrese un número válido
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa un número entero mayor que 1.';
        return; // Sale de la función si el número no es válido
    }

    // Inicializa una variable para verificar si el número es primo
    let esPrimo = true;

    // Itera desde 2 hasta la raíz cuadrada del número para verificar si tiene divisores
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por algún i (excepto 1 y sí mismo), no es primo
        if (numero % i === 0) {
            esPrimo = false;
            break; // Sale del bucle si encuentra un divisor, ya que no es primo
        }
    }

    // Verifica el resultado y actualiza el contenido del elemento con id 'resultado'
    if (esPrimo) {
        document.getElementById('resultado').innerHTML = `${numero} es un número primo.`;
    } else {
        document.getElementById('resultado').innerHTML = `${numero} no es un número primo.`;
    }
}
