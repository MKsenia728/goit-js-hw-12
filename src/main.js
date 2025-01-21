import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { getPhoto } from './js/pixabay-api';
import { createGalleryElement } from './js/render-functions';
import { createLoader } from './js/render-functions';

const formEL = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');
const iziToastCommonOptions = { position: 'topRight', messageSize: 20 };
let simplelightbox;

const createGallery = async e => {
  e.preventDefault();
  const loaderEl = createLoader();
  formEL.insertAdjacentElement('afterend', loaderEl);

  const searchedThema = e.target.elements[0].value.trim();

  if (searchedThema === '') {
    iziToast.warning({
      ...iziToastCommonOptions,
      message: 'Input please the data',
    });
    loaderEl.remove();
    return;
  }
  
  try {
    const {
      data: { hits: photoArray },
    } = await getPhoto(searchedThema);

    formEL.reset();
    loaderEl.remove();
    if (photoArray.length === 0) {
      iziToast.show({
        ...iziToastCommonOptions,
        message: `Sorry, there are no images matching your search query ${searchedThema}. Please try again!`,
      });
      galleryList.innerHTML = '';
      return;
    }
    const galleryItems = photoArray
      .map(el => createGalleryElement(el))
      .join('');
    galleryList.innerHTML = galleryItems;

    simplelightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
    simplelightbox.refresh();
    
  } catch (err) {
    iziToast.error({
      ...iziToastCommonOptions,
      message: err,
    });
  }
};

formEL.addEventListener('submit', createGallery);
