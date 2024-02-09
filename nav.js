function stickyNav() {
    let navMenu = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if(window.scrollY >= 100){
            navMenu.classList.add('chcolor');
        } else {
            navMenu.classList.remove('chcolor')
        }
    });
}


// function mobileMenu() {
//     let mobile = document.querySelector('.mobile-menu');
//     let list = document.querySelector('. list');
//     window.addEventListener('click', () => {
//         mobile.style.display = "block"
//         list.style.display = "block"
//         console.log('OK')
//     });

// };

function mobileMenu() {
    document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
});

}

mobileMenu();
stickyNav(); 