import { galleryItems } from './gallery-items.js';
// Change code below this line
const listEl = document.querySelector(".gallery")
const renderList =(arr, container)=>{
	const markup = arr.map((el) => `<li class="gallery__item">
	<a class="gallery__link" href="${el.original}">
	  <img
		class="gallery__image"
		src="${el.preview}"
		data-source="large-image.jpg"
		alt="${el.description}"
	  />
	</a>
  </li>`).join('');
  container.insertAdjacentHTML("beforeend", markup);
}
const handleListClick = (event) =>{
	const {target, currentTurget} = event;
	event.preventDefault();
	
	if (target === currentTurget){
		return
	}
	const img = galleryItems.find(item=>item.description===event.target.getAttribute("alt"));
	const instance = basicLightbox.create(`
    <div class="modal">
	<img
	class="gallery__image"
	src="${img.original}"
	data-source="large-image.jpg"
	alt="${img.description}"
  />
    </div>
`);
instance.show();

const modalClose =(event =>{
	
	if(event.key === "Escape"){
		instance.close();
		document.removeEventListener("keydown", modalClose)
	}
	})

 if(instance.visible()){
	document.addEventListener("keydown", modalClose)
 }

}

renderList(galleryItems, listEl);
listEl.addEventListener("click", handleListClick);
console.log(galleryItems);


