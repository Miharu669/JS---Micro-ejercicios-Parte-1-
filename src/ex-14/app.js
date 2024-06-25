//Dado que accedo a la página
//Cuando relleno los formularios y los validos
//Veo si los numeros ingresados en el formulario comparten divisores comunes y cuales son


function encontrarDivisoresComunes() {
    // Obtiene el valor del input con id 'numero1' y 'numero2' que contienen los números ingresados por el usuario
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);

    // Verifica si alguno de los números ingresados no es válido (por ejemplo, si no es un número)
    if (isNaN(numero1) || isNaN(numero2)) {
        // Muestra un mensaje en el elemento con id 'resultado' indicando que se ingresen números válidos
        document.getElementById('resultado').innerHTML = 'Por favor, ingresa números válidos.';
        return; // Sale de la función si alguno de los números no es válido
    }

    // Inicializa un array para almacenar los divisores comunes de numero1 y numero2
    const divisoresComunes = [];

    // Itera desde 1 hasta el menor de numero1 y numero2 para encontrar los divisores comunes
    for (let i = 1; i <= numero1 && i <= numero2; i++) {
        // Si i es divisor tanto de numero1 como de numero2, lo agrega al array de divisores comunes
        if (numero1 % i === 0 && numero2 % i === 0) {
            divisoresComunes.push(i);
        }
    }

    // Verifica si se encontraron divisores comunes
    if (divisoresComunes.length === 0) {
        // Si no se encontraron, muestra un mensaje indicando que no hay divisores comunes
        document.getElementById('resultado').innerHTML = `No hay divisores comunes entre ${numero1} y ${numero2}.`;
    } else {
        // Si se encontraron, muestra un mensaje con los divisores comunes separados por coma
        document.getElementById('resultado').innerHTML = `Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}.`;
    }
}
