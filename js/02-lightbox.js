import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
