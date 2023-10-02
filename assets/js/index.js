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