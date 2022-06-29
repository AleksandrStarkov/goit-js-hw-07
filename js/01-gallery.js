import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

// My CODE

const divGalery = document.querySelector('.gallery');

const galeryBlock = createImegyList(galleryItems);

function createImegyList(items) {
  return items
    .map(
      item => `<div class="gallery__item">
                    <a class="gallery__link" href="large-image.jpg">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                    </a>
                 </div>
`,
    )
    .join('');
}

divGalery.innerHTML = galeryBlock;

divGalery.addEventListener('click', onDivGaleryClick);

function onDivGaleryClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const imgEl = evt.target.dataset.source;
  const removeImgEl = basicLightbox.create(`
    <img src="${imgEl}" width="800" height="600">
`);
  removeImgEl.show();

  divGalery.addEventListener('keydown', onCloseModal);

  function onCloseModal(evt) {
    if (evt.key === 'Escape') {
      removeImgEl.close();
      divGalery.addEventListener('keydown', onCloseModal);
    }
  }
}
