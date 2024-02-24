const contents = document.querySelectorAll('.content');

const checkBoxes = () => {
  const trigerBottom = (window.innerHeight / 5) * 4;
  contents.forEach((content) => {
    const boxTop = content.getBoundingClientRect().top;
    if (boxTop < trigerBottom) {
      content.classList.add('show');
    } else {
      content.classList.remove('show');
    }
  });
};

window.addEventListener('scroll', checkBoxes);
checkBoxes();
