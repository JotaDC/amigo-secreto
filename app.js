// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
const agregarAmigo = () => {
    //Capturar el valor del campo de entrada
    let amigo = document.querySelector('#amigo').value
    //Validaciones
    //Validar que el campo no esté vacío
    if (amigo.trim() === '') {
        alert('Por favor, inserte un nombre')
        return
    } else {
        //Validar que el campo no sea un número
        if (!isNaN(amigo)) {
            alert('Por favor, inserte un nombre')
            return
        }
        else {
            //Validar que el amigo no se repita
            if (amigos.includes(amigo)) {
                alert('El amigo ya fue agregado')
                return
            }
            else {
                amigos.push(amigo.trim())
                console.log(amigos)
                document.querySelector('#amigo').value = ''
                mostrarAmigos()
            }
        }
    }

}

const mostrarAmigos = () => {
    let amigosHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        amigosHTML += `<li>${amigos[i]}</li>`
    }
    document.querySelector('#listaAmigos').innerHTML = amigosHTML
}

const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('Por favor, ingrese amigos')
        return
    }
    let indice=Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[indice]
    document.querySelector('#resultado').innerHTML = amigoSorteado
}