const datos = [{
    pregunta:"Nosotros",
    img: "media/AFSolo.png",
    imgAlt:"Produccino masiva de prendas",
    Link:"Posters/Daños.html",
},{
    pregunta:"Productos",
    img: "media/productos.png",
    imgAlt:"Daños",
    Link:"Posters/Contaminacion.html",
},{
    pregunta:"Cuidado de flores",
    img: "media/cuidado.png",
    imgAlt:"Que es la contaminacion",
    Link:"Posters/Afecta.html",
}]
const portadas = document.querySelector(".portadas")

for (dato in datos){
    let info = datos[dato]
    let pregunta = info["pregunta"]
    let imagen = info["img"]
    let imgalt = info["imgAlt"]
    let link = info["Link"]
    
    function htmlCode(){
        let div = document.createElement("div")
        let a1 = document.createElement("a")
        let img = document.createElement("img")
        let a2 = document.createElement("a")
        div.className = "portafolio-container"; 
        a1.href = link; //a1.target = "_BLANK"
        img.className = "imagen"; img.src = imagen; img.alt = imgalt;
        a1.appendChild(img)
        a2.className = "pregunta"; a2.href = link; a2.target= "_BLANK"; a2.textContent = pregunta;  
        div.appendChild(a1)
        div.appendChild(a2)
        portadas.appendChild(div)

        if (dato == 0) {
            img.classList.add("rojo")
        
        }
    }
    htmlCode()
}
let navIconContainer = document.querySelector(".iconContainer")
let aContainer = document.querySelector(".aContainer")
let navItem = document.querySelector("nav-item")

navIconContainer.addEventListener("click",()=>{
    aContainer.classList.toggle("show")
})