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
  