//###################
//MENU MOBILE

function ClickMenu() {
   if ( mobile.style.display == 'block') {
     mobile.style.display = 'none'
   }else {
     mobile.style.display = 'block'
   }
}


//##########################
//EFEITO SCROLL
//#########################
const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('ativo');   // aparece
        } else {
            entrada.target.classList.remove('ativo'); // some ao sair — permite repetir
        }
    });
}, { threshold: 0.15 }); // 15% do elemento visível já ativa

elementos.forEach(el => observer.observe(el));




