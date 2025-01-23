// Плавная прокрутка к секциям
document.querySelectorAll('#main-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Подсветка активной секции
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#main-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Открытие/закрытие меню на мобильных устройствах
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('#main-nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navUl.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInsideMenu) {
    navUl.classList.remove('active');
  }
});

// Показ/скрытие портфолио
document.getElementById('show-portfolio').addEventListener('click', function() {
  const gallery = document.querySelector('.gallery');
  if (gallery.style.display === 'none' || gallery.style.display === '') {
    gallery.style.display = 'flex';
    this.textContent = 'Скрыть портфолио';
  } else {
    gallery.style.display = 'none';
    this.textContent = 'Показать портфолио';
  }
});

// Показ/скрытие отзывов
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

// Анимация появления сертификатов при прокрутке
const certificates = document.querySelectorAll('.certificate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

certificates.forEach(certificate => {
  observer.observe(certificate);
});
