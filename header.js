window.onload = function() {
  const sections = {
    'gioithieu': document.getElementById('gioithieu'),
    'dichvu': document.getElementById('dichvu'),
    'sanpham': document.getElementById('sanpham'),
    'lienhe': document.getElementById('lienhe')
  };

  for (const [hash, section] of Object.entries(sections)) {
    if (window.location.hash === '#' + hash && section) {
      window.scrollTo(0, section.offsetTop);
      break;
    }
  }
};
