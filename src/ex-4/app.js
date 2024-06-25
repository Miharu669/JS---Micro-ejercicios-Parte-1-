//Dado que accedo a la página
//Cuando ingreso los dos números
//Veo el resultado de la suma de dichos números


// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', (event) => {
    // Imprime un mensaje en la consola
    console.log("DOM completamente cargado y analizado");

    // Busca el botón 'sumarBtn' en el DOM
    const sumarBtn = document.getElementById('sumarBtn');

    // Verifica si se encontró el botón
    if (sumarBtn) {
        // Imprime un mensaje si se encontró el botón
        console.log("Botón encontrado:", sumarBtn);

        // Añade un event listener para escuchar clics en el botón
        sumarBtn.addEventListener('click', sumarNumeros);
    } else {
        // Imprime un mensaje de error si no se encontró el botón
        console.error("No se pudo encontrar el botón con id 'sumarBtn'.");
    }
});

// Función que se ejecuta cuando se hace clic en el botón 'sumarBtn'
function sumarNumeros() {
    // Imprime un mensaje en la consola
    console.log("sumarNumeros llamada");

    // Obtiene y convierte los valores de los campos de entrada a números flotantes
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verifica si los valores ingresados son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        // Muestra un mensaje de error si los valores no son números válidos
        document.getElementById('resultado').innerText = 'Por favor, ingrese números válidos.';
        return; // Termina la función si los valores no son válidos
    }

    // Calcula la suma de los números y muestra el resultado
    const resultado = numero1 + numero2;
    document.getElementById('resultado').innerText = `La suma de ${numero1} + ${numero2} = ${resultado}`;
}
