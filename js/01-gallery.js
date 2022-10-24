import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryItem = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', addGalleryItem);
galleryRef.addEventListener("click", onGalleryItemClick);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`).join("");
}

function onGalleryItemClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
    },
})
    instance.show();

    window.addEventListener("keydown", onEscPress);

    function onEscPress(event) {
        if (event.code === "Escape") {
            instance.close();
        };
    }
}


