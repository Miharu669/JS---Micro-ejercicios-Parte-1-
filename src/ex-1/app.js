//Dado que entro en la pagina
//Cuando se renderiza
//Entonces veo el texto

//Creo una constante con el texto
const hello = 'Hello Javascript'
const divApp = document.querySelector('#app')

//Creo la funcion que ponga el texto en el elemento por id
function renderTitle(title) {
divApp.innerHTML = `<h1>${title}</h1>`
}
//Llamo a la funcion para que imprima el texto
renderTitle(hello)
