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

const checkVisibility = () => {
  certificates.forEach(certificate => {
    const certificateTop = certificate.getBoundingClientRect().top;
    const certificateBottom = certificate.getBoundingClientRect().bottom;
    if (certificateTop < window.innerHeight && certificateBottom > 0) {
      certificate.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
  