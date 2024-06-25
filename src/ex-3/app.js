//Dado que el usuario se encuentra en la pagina con el formulario
//cuando rellena el campo de formulario con su nombre y valida haciendo click en el boton validar
//entonces se renderiza en  pantalle el texto "hola >nombre usuario>"

//click del boton = evento
//recuperar el nombre de usuario
//renderizar en un contenedor html el texto "hola _____"


//Creo las constantes para coger elementos id del html
const inputUsername = document.getElementById('username')
const btnValidate = document.getElementById('btn-validate')
const mainBlock = document.querySelector('main')

//Funcion para que cuando haga click en el boton llame a la funcion
btnValidate.addEventListener('click', () => {
 const username = inputUsername.value
 render(username)
})

//funcion que imprima el username
function render(username) {

    if (isEmpty(username)) {
        mainBlock.innerHTML = /*html */`
    <span>Debe introducir su nombre</span>`
    return
    }

    mainBlock.innerHTML = /*html */`
       <span>Hola ${username}</span>`

}
//funcion que comprueba si el campo esta vacio
function isEmpty(username) {
    const stringLength = username.length
    return (stringLength === 0) ? true : false
}