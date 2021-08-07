let circulo = document.getElementById("circulo");

let TituloBoton = Object.freeze({
    titulo1:"TEMARIO",
    titulo2:"SISTEMA EXPLICATIVO",
    titulo3:"SISTEMA EVALUATIVO",
    titulo4:"COSTOS ECONÓMICOS",
    titulo5:"ESTUDIE EN CUALQUIER DISPOSITIVO",
    titulo6:"NUESTROS BENEFICIOS",
    titulo7:"ADQUIÉRELO CON FACILIDAD",
    titulo8:"A TU DISPOSICIÓN EN MINUTOS",
    titulo9:"MATEMÁTICAS INTERACTIVAS PARA NIÑOS",
    titulo10:"LIBROS DE SUPERACIÓN"
})

let Href = Object.freeze({

    href8:"./disposicion_en_minutos.html",
    href9:"./matematicas_interactivas_para_ninos.html"
})
function Menu() {
    for (i = 0; i < 10 ; i++ ) {
        let circuloPequeno = document.createElement("div")
        circuloPequeno.classList.add("circulo-pequeno")
        circuloPequeno.style.setProperty("border", `0.06em solid var(--border${i+1})`);
        circuloPequeno.style.setProperty("margin", `var(--margin-circulo${i+1})`);

        let linea = document.createElement("div")
        linea.classList.add("linea")
        linea.style.setProperty("transform", `var(--transform-linea${i+1})`);
        linea.style.setProperty("width", `var(--width-linea${i+1})`);

        let punto = document.createElement("div");
        punto.classList.add("punto");
        punto.style.setProperty("transform", `var(--transform-punto${i+1})`);

        let boton = document.createElement("div")
        boton.classList.add("boton-agrupado")
        boton.style.setProperty("transform", `var(--transform-btn${i+1})`);

        let spanRombo =document.createElement("span")
        spanRombo.classList.add("rombo")
        spanRombo.style.setProperty(`background`, `var(--background-rombo${i+1})`);

        let h3Rombo =document.createElement("h3")
        h3Rombo.classList.add("text")
        let link =document.createElement("a")
        link.classList.add("button-href")
        link.style.setProperty(`background`, `var(--background${i+1})`);
        link.href = Href[`href${i+1}`];

        
        let span =document.createElement("span")
        span.classList.add("flecha")
        span.style.setProperty(`border-left`,`2.125em solid var(--border${i+1})`);

        let h3 =document.createElement("h3")
        h3.classList.add("texto")
     
        circulo.appendChild(circuloPequeno)
        circuloPequeno.appendChild(linea)
        circuloPequeno.appendChild(punto);
        circuloPequeno.appendChild(boton)
        boton.appendChild(spanRombo)
        boton.appendChild(link)
        boton.appendChild(span)
        link.appendChild(h3)
        spanRombo.appendChild(h3Rombo)
        h3.innerHTML = TituloBoton[`titulo${i+1}`];
    
        h3Rombo.innerHTML = i+1;
    }   
}

document.onload = Menu()
