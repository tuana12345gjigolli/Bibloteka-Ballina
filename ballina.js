// Merr të gjitha div-et me klasën category
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  const images = category.querySelectorAll('.books img');
  const descBox = category.querySelector('.description');

  images.forEach(img => {
    img.addEventListener('click', () => {
      // Vendos përshkrimin në div-in e përkatësisë
      descBox.textContent = img.getAttribute('data-info');
      descBox.classList.remove('info-hidden');
    });
  });
});


