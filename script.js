document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__listas');
    
    menuToggle.addEventListener('click', function(){
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnsideMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideMenu && !isClickOnsideMenuToggle){
            navMenu.classList.remove('active')
        }
    });
    });

    
    //ANIMACIONES
    window.sr = ScrollReveal();

    ScrollReveal().reveal();

    //header
    sr.reveal('.header__subtitle',{
        duration : 1500,
        origin : 'top',
        distance : '-100px'
    });

    sr.reveal('.header__title',{
        duration : 1500,
        origin : 'top',
        distance : '-100px',
        delay : 500,
    });

    sr.reveal('.header__flex',{
        duration : 1500,
        origin : 'top',
        distance : '-100px',
        delay :1000,
    });


    //cuestions
    sr.reveal('.cuestions__img',{
        duration : 1000,
        origin : 'rigth',
        distance : '-80px',
    });


    //articles
    sr.reveal('.uno',{
        duration : 1000,
        origin : 'top',
        distance : '-50px',
    });

    sr.reveal('.dos',{
        duration : 1000,
        origin : 'top',
        distance : '-50px',
        delay : 500
    });

    sr.reveal('.tres',{
        duration : 1000,
        origin : 'top',
        distance : '-50px',
        delay : 1000,
    });









