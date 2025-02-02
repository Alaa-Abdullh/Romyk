// slider image 
const testimonialItems = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialItems.length - 1;
    showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
    showTestimonial(currentIndex);
});


showTestimonial(currentIndex);


// loading 

window.onload = () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.querySelector('.content').style.display = 'block';
        }, 500); 
    }, 2000);
};
