import axios from 'axios';

export const getPhoto = (query) => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  
  return axios.get('', {params : {    
    key : '48288328-1d3de9be04bab144528bc8ac3',
    q : query,
    image_type : 'photo',
    orientation : 'horizontal',
    safesearch : true,}});

};