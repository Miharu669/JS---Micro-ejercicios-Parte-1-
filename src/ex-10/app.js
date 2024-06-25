//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el numero de cada vocal que hay en el formulario


function contarVocales() {
    // Obtiene el valor del input con id 'fraseInput' que contiene la frase ingresada por el usuario
    const frase = document.getElementById('fraseInput').value;

    // Convierte toda la frase a minúsculas para hacer la búsqueda de vocales insensible a mayúsculas
    const fraseMinusculas = frase.toLowerCase();

    // Inicializa contadores individuales para cada vocal
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;

    // Itera sobre cada caracter de la frase en minúsculas
    for (let caracter of fraseMinusculas) {
        // Utiliza un switch para contar cada vocal 
        switch (caracter) {
            case 'a':
                contadorA++;
                break;
            case 'e':
                contadorE++;
                break;
            case 'i':
                contadorI++;
                break;
            case 'o':
                contadorO++;
                break;
            case 'u':
                contadorU++;
                break;
           
        }
    }

    // Actualiza el contenido del elemento con id 'resultado' con los contadores de cada vocal
    document.getElementById('resultado').innerHTML = `
        <p>A: ${contadorA}</p>
        <p>E: ${contadorE}</p>
        <p>I: ${contadorI}</p>
        <p>O: ${contadorO}</p>
        <p>U: ${contadorU}</p>
    `;
}
