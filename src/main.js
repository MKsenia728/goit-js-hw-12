import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { fetchPhoto } from './js/pixabay-api';
import { createGalleryElement } from './js/render-functions';

const formEL = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');

const createGallery = e => {
  e.preventDefault();
  const searchedThema = e.target.elements[0].value.trim();

  if (searchedThema === '') {
    iziToast.warning({
      position: 'topRight',
      messageSize: 20,
      message: 'Input please the data',
    });
    return;
  }

  fetchPhoto(searchedThema)
    .then(data => {
      if (data.total === 0) {
        iziToast.show({
          position: 'topRight',
          messageSize: 20,
          message:
            `Sorry, there are no images matching your search query ${searchedThema}. Please try again!`,
        });
        formEL.reset();
        galleryList.innerHTML = '';
        return;
      }
      console.log(data.hits);
      const galleryItems = data.hits
        .map(el => createGalleryElement(el))
        .join('');
      galleryList.innerHTML = galleryItems;
    })
    .catch(err => {
      iziToast.error({
        message: err,
      });
    });
};



formEL.addEventListener('submit', createGallery);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });