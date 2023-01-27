import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)

const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onGalleryListClick)

function createGalleryMarkup(galleryItems) {

return galleryItems.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('');
//console.log(markup);

}


function onGalleryListClick(evt) {
  const isGalleryImg = evt.target.classList.contains('gallery__image')
  if(!isGalleryImg){
    return
  }

  evt.preventDefault();


function onEscKeyPress(event){
  
if (event.code === "Escape"){
  instance.close();
}
}

const instance = basicLightbox.create(`
<img src="${evt.target.dataset.source}">
`, {
  onShow: (instance) => {document.addEventListener('keydown', onEscKeyPress)},
  onClose: (instance) => {document.removeEventListener('keydown', onEscKeyPress)}
} )
instance.show();

}





