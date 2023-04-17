const slideDoitac = document.querySelectorAll('.slide_doitac');

slideDoitac.forEach((slide, index) => {
  slide.style.position = 'absolute';
  slide.style.top = '0';
  slide.style.left = '0';
  slide.style.width = '99%';
  slide.style.height = '186px';
  slide.style.display = 'flex';
  slide.style.justifyContent = 'space-between';
  slide.style.animation = `slide 6s infinite ${index === 1 ? '3s' : '0s'}`;
});
