

let fotos = ["assets/image/cachorro2.jpg", "assets/image/cachorro3.jpg", "assets/image/cachorro4.jpg", "assets/image/cachorro5.jpg" ]

let r = document.getElementById('carrossel')

indice = 0

setInterval(function(){
    indice++
    r.src = (fotos[indice])
    
    if(indice >= fotos.length ) {
        indice = 0
    }
}, 3000) 