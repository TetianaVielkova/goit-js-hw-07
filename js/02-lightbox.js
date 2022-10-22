import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryItem = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', addGalleryItem);
galleryRef.addEventListener("click", onGalleryItemClick);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => 

    `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`).join("");
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


function onGalleryItemClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
}