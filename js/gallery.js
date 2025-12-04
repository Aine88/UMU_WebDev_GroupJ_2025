document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('.navbar ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });

        const navLinks = navUl.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            });
        });
    }

  
    const orderButton = document.querySelector('.order-now-btn');

    if (orderButton) {
        orderButton.addEventListener('click', function() {
            window.location.href = 'menu.html';
        });
    }

    const socialIcons = document.querySelectorAll('.social-badges a');
    
    socialIcons.forEach(icon => {
    
        icon.addEventListener('mousedown', function() {
            icon.classList.add('clicked-effect');
        });
        
        icon.addEventListener('mouseup', function() {
            setTimeout(() => {
                icon.classList.remove('clicked-effect');
            }, 100); 
        });


        icon.addEventListener('touchstart', function() {
            icon.classList.add('clicked-effect');
        });
        icon.addEventListener('touchend', function() {
            setTimeout(() => {
                icon.classList.remove('clicked-effect');
            }, 100);
        });
    });
});