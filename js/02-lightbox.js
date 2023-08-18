import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector(".gallery");

const renderList =(arr, container)=>{
	const markup = arr.map((el) => `<li class="gallery__item">
	<a class="gallery__link" href="${el.original}">
	   <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
	</a>
 </li>`).join('');
  container.insertAdjacentHTML("beforeend", markup);
}
renderList(galleryItems, listEl);
let lightbox = new SimpleLightbox('.gallery a', {captions: true,
	captionsData: 'alt',
	captionDelay: 250,});

	
console.log(galleryItems);
