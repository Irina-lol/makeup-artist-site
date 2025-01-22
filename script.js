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