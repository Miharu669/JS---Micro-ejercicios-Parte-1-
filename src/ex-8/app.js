//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto que muestra que vocales son encontradas en el formulario

function buscarVocales() {
    // Obtiene el valor del input con id 'fraseInput' que tiene la frase ingresada por el usuario
    const frase = document.getElementById('fraseInput').value;

    // Convierte toda la frase a minúsculas para hacer la búsqueda de vocales
    const fraseMinusculas = frase.toLowerCase();

    // cadena vacía para almacenar las vocales encontradas
    let vocalesEncontradas = '';

    // Itera sobre cada carácter de la frase en minúsculas
    for (let i = 0; i < fraseMinusculas.length; i++) {
        const caracter = fraseMinusculas[i]; // Obtiene el carácter actual

        // Verifica si el carácter actual es una vocal 
        if ('aeiou'.includes(caracter)) {
            vocalesEncontradas += caracter + ' '; // Agrega la vocal encontrada a la cadena vocalesEncontradas
        }
    }

    // Verifica si se encontraron vocales en la frase
    if (vocalesEncontradas) {
        // Si se encontraron vocales, actualiza el contenido del elemento con id 'resultado' con las vocales encontradas
        document.getElementById('resultado').innerText = `Las vocales encontradas en la frase son: ${vocalesEncontradas}`;
    } else {
        // Si no se encontraron vocales, muestra un mensaje indicando que no se encontraron en el elemento 'resultado'
        document.getElementById('resultado').innerText = 'No se encontraron vocales en la frase.';
    }
}

