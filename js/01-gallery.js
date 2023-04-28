import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" rel="noopener noreferer" target="_blank">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();
  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }
  const imageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img src="${imageUrl}" width="1280" height="auto"/>
        `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
  }
}
