const addTags = () => {
  const input = document.querySelector('.input');
  const wrapper = document.querySelector('.wrapper');

  input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      const val = input.value.trim();

      if (val.length > 2) {
        const tag = `<div class="tag">
        <span class="tag__title">${val}</span>
        <button class="tag__cross"></button>
        </div>`;
  
        wrapper.insertAdjacentHTML('afterBegin', tag);
        input.value = '';
        removeTags();
      }
    }
  });
}

addTags();

function removeTags() {
  const tagsCross = document.querySelectorAll('.tag__cross');
  const tags = document.querySelectorAll('.tag');

  tagsCross.forEach((cross, index) => {
    cross.addEventListener('click', () => {
      tags[index].parentNode && tags[index].parentNode.removeChild(tags[index]);
    });
  });
}