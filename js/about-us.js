document.addEventListener('DOMContentLoaded', () => {
   
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        
        const images = card.querySelectorAll('img');
        
    
        if (images.length < 2) return; 

        let currentImageIndex = 0;
        images.forEach((img, index) => {
            img.style.transition = 'opacity 0.8s ease-in-out'; 
            img.style.position = 'absolute'; 
            img.style.top = '0';
            img.style.left = '0';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.borderRadius = '8px';
            img.style.opacity = (index === 0) ? 1 : 0; 
            img.style.zIndex = (index === 0) ? 10 : 1; 
        });

        
        card.style.position = 'relative'; 
      
        
      
        const nextImage = () => {
            const nextIndex = (currentImageIndex + 1) % images.length;

            
            images[currentImageIndex].style.opacity = 0;
            images[currentImageIndex].style.zIndex = 1;
            
            
            images[nextIndex].style.opacity = 1;
            images[nextIndex].style.zIndex = 10;

            currentImageIndex = nextIndex;
        };

        
    
        setInterval(nextImage, 4000); 
    });
});