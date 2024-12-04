function glowOnHover() {
    const showcaseItems = document.querySelectorAll('#showcase h1, #showcase h3');
  
    showcaseItems.forEach(item => {
        // Add the glow-hover class on mouseenter to increase the glow
        item.addEventListener('mouseenter', () => {
            item.classList.add('glow-hover'); 
        });

        // Remove the glow-hover class on mouseleave to return to the original glow
        item.addEventListener('mouseleave', () => {
            item.classList.remove('glow-hover');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    glowOnHover();
});
