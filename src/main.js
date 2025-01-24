import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { getPhoto } from './js/pixabay-api';
import { createGalleryElement } from './js/render-functions';
import { createLoader } from './js/render-functions';

const formEL = document.querySelector('.form');
const galleryList = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more-btn');
const iziToastCommonOptions = { position: 'topRight', messageSize: 20 };
let simplelightbox;
let perPage = 15;
let pageNumber;
let searchedThema = '';
const loaderEl = createLoader();
let galleryItemEl;

const onSimpleLightBox = () => {
  simplelightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  simplelightbox.refresh();
};

const onScroll = () => {
  const { height } = galleryItemEl.getBoundingClientRect();
  window.scrollBy(0, height * 2);
};

const createGallery = async e => {
  e.preventDefault();
  btnLoadMore.classList.add('is-hidden');
  pageNumber = 1;
  galleryList.insertAdjacentElement('afterend', loaderEl);

  searchedThema = e.target.elements[0].value.trim();

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
      data: { hits: photoArray, totalHits: maxPhotoCount },
    } = await getPhoto(searchedThema, pageNumber, perPage);

    formEL.reset();

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

    if (pageNumber * perPage < maxPhotoCount) {
      btnLoadMore.classList.remove('is-hidden');
      btnLoadMore.addEventListener('click', onLoadMore);
    }

    onSimpleLightBox();
  } catch (err) {
    console.log(err);
    iziToast.error({
      ...iziToastCommonOptions,
      message: err.message,
    });
  } finally {
    loaderEl.remove();
  }
};

const onLoadMore = async () => {
  try {
    pageNumber++;
    btnLoadMore.classList.add('is-hidden');
    galleryList.insertAdjacentElement('afterend', loaderEl);

    const {
      data: { hits: photoArray, total: maxPhotoCount },
    } = await getPhoto(searchedThema, pageNumber, perPage);

    const galleryItems = photoArray
      .map(el => createGalleryElement(el))
      .join('');
    galleryList.insertAdjacentHTML('beforeend', galleryItems);

    galleryItemEl = galleryList.firstChild;
    onScroll();
    onSimpleLightBox();

    if (pageNumber * perPage >= maxPhotoCount) {
      btnLoadMore.classList.add('is-hidden');
      btnLoadMore.removeEventListener('click', onLoadMore);

      iziToast.show({
        ...iziToastCommonOptions,
        message: `Sorry, there are no images matching your search query ${searchedThema}. Please try again!`,
      });
    } else {
      btnLoadMore.classList.remove('is-hidden');
    }
  } catch (err) {
    iziToast.error({
      ...iziToastCommonOptions,
      message: err.message,
    });
  } finally {
    loaderEl.remove();
  }
};

formEL.addEventListener('submit', createGallery);
