let slideIndex = 0;

function plusSlides(n) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  
  // Оновлюємо індекс слайду
  slideIndex = (slideIndex + n) % totalSlides;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }
  
  // Зміщуємо всі слайди за допомогою transform
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}
