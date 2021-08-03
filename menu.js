let circulo = document.getElementById("circulo");

function Menu() {
    for (i = 0; i < 10 ; i++ ) {
        let circuloPequeno = document.createElement("div")
        circuloPequeno.classList.add("circulo-pequeno")
        circuloPequeno.style.setProperty("border", `1px solid var(--border${i+1})`);
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
        spanRombo.style.setProperty(`background`, `var(--background${i+1})`);

        let h3Rombo =document.createElement("h3")
        h3Rombo.classList.add("text")
        let link =document.createElement("a")
        link.classList.add("button-href")
        link.style.setProperty(`background`, `var(--background${i+1})`);
        
        let span =document.createElement("span")
        span.classList.add("flecha")
        span.style.setProperty(`border-left`,`34px solid var(--border${i+1})`);

        let h3 =document.createElement("h3")
        h3.classList.add("texto")
        let textoFinal = texto(i+1)

        circulo.appendChild(circuloPequeno)
        circuloPequeno.appendChild(linea)
        circuloPequeno.appendChild(punto);
        circuloPequeno.appendChild(boton)
        boton.appendChild(spanRombo)
        boton.appendChild(link)
        boton.appendChild(span)
        link.appendChild(h3)
        spanRombo.appendChild(h3Rombo)
        h3.innerHTML = textoFinal;
        h3Rombo.innerHTML = i+1;
    }   
}

function texto(num) {
  let texto = "";
  switch (num) {
    case 1:
      texto = "TEMARIO";
      break;
    case 2:
      texto = "SISTEMA EXPLICATIVO";
      break;
    case 3:
      texto = "SISTEMA EVALUATIVO";
      break;
    case 4:
      texto = "COSTOS ECONÓMICOS";
      break;
    case 5:
      texto = "ESTUDIE EN CUALQUIER DISPOSITIVO";
      break;
    case 6:
      texto = "NUESTROS BENEFICIOS";
      break;
    case 7:
      texto = "ADQUIÉRELO CON FACILIDAD";
      break;
    case 8:
      texto = "A TU DISPOSICIÓN EN MINUTOS";
      break;
    case 9:
      texto = "MATEMÁTICAS INTERACTIVAS PARA NIÑOS";
      break;
    case 10:
      texto = "LIBROS DE SUPERACIÓN";
      break;
  }
  return texto;
}

document.onload = Menu()
