export const createGalleryElement = ({
  webformatURL: smallImg,
  largeImageURL: largeImg,
  tags: alt,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<li class="gallery-item">
       <a class="gallery-link" href=${largeImg}>
         <img
          class="gallery-image"
          src=${smallImg}
          alt=${alt}
         />
        </a>
        <ul class="info-list">
           <li class="info-list-item">
             <span class="info-list-item-title">Likes</span>
             <span class="info-list-item-data">${likes}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Views</span>
             <span class="info-list-item-data">${views}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Comments</span>
             <span class="info-list-item-data">${comments}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Downloads</span>
             <span class="info-list-item-data">${downloads}</span>
           </li>
         </ul>
     </li>`;

};
