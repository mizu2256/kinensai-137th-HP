document.addEventListener('DOMContentLoaded', () => {
    const backgroundImages = document.querySelectorAll('.bg-image');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    const headerHeight = header ? header.offsetHeight : 0;
    const footerHeight = footer ? footer.offsetHeight : 0;
    
    const fullPageHeight = document.documentElement.scrollHeight;
    
    const scrollableHeight = fullPageHeight - headerHeight - footerHeight;

    const PageHeight = scrollableHeight / 4;

    let currentIndex = 0;

    backgroundImages[currentIndex].classList.add('active');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        const adjustedScrollY = scrollY - headerHeight;

        let newIndex = 0;
        if (adjustedScrollY > 0) {
             newIndex = Math.floor(adjustedScrollY / PageHeight);
        }

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