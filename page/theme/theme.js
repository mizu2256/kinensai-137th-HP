document.addEventListener('DOMContentLoaded', () => {
    const backgroundImages = document.querySelectorAll('.bg-image');
    const content = document.querySelector('.theme-info');
    const PageHeight = document.documentElement.scrollHeight / 3;

    let currentIndex = 0;

    backgroundImages[currentIndex].classList.add('active');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        let newIndex = Math.floor(scrollY / PageHeight);

        if (newIndex >= backgroundImages.length) {
            newIndex = backgroundImages.length - 1;
        } else if (newIndex < 0) {
            newIndex = 0;
        }

        if (newIndex !== currentIndex) {
            backgroundImages[currentIndex].classList.remove('active');
            backgroundImages[newIndex].classList.add('active');
            currentIndex = newIndex;
        }
    });
});