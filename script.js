document.querySelectorAll('.circle-image').forEach(image => {
  image.style.opacity = 0;
  image.style.transition = 'opacity 1s';
  setTimeout(() => {
      image.style.opacity = 1;
  }, 500);
});

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
      const info = item.querySelector('p').innerText;
      alert(`Informasi: ${info}`);
  });
});
