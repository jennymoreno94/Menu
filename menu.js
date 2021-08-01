let circulo = document.getElementById("circulo");

function Menu() {
    for (i = 0; i < 10 ; i++ ) {
        let circuloPequeno = document.createElement("div")
        circuloPequeno.classList.add("circulo-pequeno")
        circuloPequeno.classList.add(`num${i+1}`)
        let linea = document.createElement("div")
        linea.classList.add("linea")
        linea.classList.add(`linea${i+1}`)
        circulo.appendChild(circuloPequeno)
        circuloPequeno.appendChild(linea)
    }   
}



document.onload = Menu()
