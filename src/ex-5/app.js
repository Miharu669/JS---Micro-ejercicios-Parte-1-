//Dado que accedo a la página
//Cuando ingreso los dos números
//Veo cual número es el mayor


// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', (event) => {
    // Busca el botón con id 'compararBtn' en el DOM y lo asigna a la variable compararBtn
    const compararBtn = document.getElementById('compararBtn');

    // Añade un event listener para saber cuando clickeo en el botón 'compararBtn'
    compararBtn.addEventListener('click', compararNumeros);
});

// Función que se ejecuta cuando se hace clic en el botón 'compararBtn'
function compararNumeros() {
    // Obtiene y convierte los valores de los input 
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    let mensaje; // Declara una variable mensaje para almacenar el resultado de la comparación

    // Verifica si los valores ingresados no son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        mensaje = 'Por favor, ingrese números válidos.'; 
    } else if (numero1 > numero2) {
        mensaje = `El número ${numero1} es mayor que el número ${numero2}.`; // Compara si numero1 es mayor que numero2
    } else if (numero1 < numero2) {
        mensaje = `El número ${numero2} es mayor que el número ${numero1}.`; // Compara si numero2 es mayor que numero1
    } else {
        mensaje = 'Ambos números son iguales.'; // Si no se cumple ninguna de las condiciones anteriores, los números son iguales
    }

    // Actualiza el contenido del elemento con id 'resultado' con el mensaje de resultado obtenido
    document.getElementById('resultado').innerText = mensaje;
}
