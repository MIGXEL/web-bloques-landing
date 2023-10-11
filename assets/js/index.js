/* SHOW AND HIDE MENU MOBILE */

const showMenu = (toggleId, navId) => {
    const toogle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    console.log(toogle, nav)
    
    if(toogle && nav){
        toogle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('av-nav-toggle','av-nav')


/* ADD CLASS ACTIVE AND HIDE MENU MOBILE */

const navLink = document.querySelectorAll('.av_item_link');

function clickItemLink(){
    navLink.forEach(item => item.classList.remove('av_active'))
    this.classList.add('av_active')

    const navMenu = document.getElementById('av-nav');
    navMenu.classList.remove('show');
}

navLink.forEach(item => item.addEventListener('click', clickItemLink))


// Obtén todos los elementos con la clase .av_title_service
const serviceElements = document.querySelectorAll('.av_title_service');

// Itera a través de los elementos y establece el atributo 'data-count'
serviceElements.forEach((element, index) => {
    element.setAttribute('data-count', index + 1);
});


// Función para verificar el scroll y agregar la clase
function agregarClaseEnScroll() {
    const elemento = document.querySelector('.av_header'); // Elemento al que se le agregará la clase
    const scrollPosition = window.scrollY; // Posición actual de scroll

    // Establece la posición de scroll en la que deseas agregar la clase
    const scrollTriggerPosition = 200; // Cambia este valor según tus necesidades

    if (scrollPosition >= scrollTriggerPosition) {
        elemento.classList.add('av_scroll_activado'); // Agrega la clase si el scroll alcanza la posición deseada
    } else {
        elemento.classList.remove('av_scroll_activado'); // Elimina la clase si el scroll no alcanza la posición deseada
    }
}

// Escucha el evento de scroll y llama a la función
window.addEventListener('scroll', agregarClaseEnScroll);


const srt = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2500,
    reset: true
})
srt.reveal('.av_container_banner, .av_content_section_services');

const srl = ScrollReveal({
    origin: "left",
    distance: "100px",
    duration: 2500,
    reset: true
})

srl.reveal('.av_content_section_nosotros');