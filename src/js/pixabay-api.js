export const fetchPhoto = (query) => {
  const searchParams = new URLSearchParams({
    key : '48288328-1d3de9be04bab144528bc8ac3',
    q : query,
    image_type : 'photo',
    orientation : 'horizontal',
    safesearch : true,
    per_page : 12,
  });
  
  return fetch(`https://pixabay.com/api/?${searchParams}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};