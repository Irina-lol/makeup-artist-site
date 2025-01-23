document.getElementById('show-portfolio').addEventListener('click', function() {
  const gallery = document.querySelector('.gallery');
  if (gallery.style.display === 'none' || gallery.style.display === '') {
    gallery.style.display = 'flex'; // Показываем галерею
    this.textContent = 'Скрыть портфолио'; // Меняем текст кнопки
  } else {
    gallery.style.display = 'none'; // Скрываем галерею
    this.textContent = 'Показать портфолио'; // Меняем текст кнопки
  }
});

const certificates = document.querySelectorAll('.certificate');
document.getElementById('show-reviews').addEventListener('click', function() {
  const reviewList = document.querySelector('.review-list');
  if (reviewList.style.display === 'none' || reviewList.style.display === '') {
    reviewList.style.display = 'flex';
    this.textContent = 'Скрыть отзывы';
  } else {
    reviewList.style.display = 'none';
    this.textContent = 'Посмотреть отзывы';
  }
});

// Добавим плавное появление элементов при прокрутке
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // Элемент появится, когда 10% его будет видно
});

// Наблюдаем за всеми элементами с классом .certificate и .review-card
document.querySelectorAll('.certificate, .review-card').forEach(element => {
  observer.observe(element);
});

// Добавим возможность открывать изображения в полноэкранном режиме
document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    const fullscreen = document.createElement('div');
    fullscreen.style.position = 'fixed';
    fullscreen.style.top = '0';
    fullscreen.style.left = '0';
    fullscreen.style.width = '100%';
    fullscreen.style.height = '100%';
    fullscreen.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    fullscreen.style.display = 'flex';
    fullscreen.style.justifyContent = 'center';
    fullscreen.style.alignItems = 'center';
    fullscreen.style.zIndex = '1000';

    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = image.src;
    fullscreenImage.style.maxWidth = '90%';
    fullscreenImage.style.maxHeight = '90%';
    fullscreenImage.style.borderRadius = '10px';

    fullscreen.appendChild(fullscreenImage);

    fullscreen.addEventListener('click', () => {
      document.body.removeChild(fullscreen);
    });

    document.body.appendChild(fullscreen);
  });
});

// Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
