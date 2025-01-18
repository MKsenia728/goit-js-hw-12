import{i as n}from"./assets/vendor-I1I71QQ2.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const m=a=>{const i=new URLSearchParams({key:"48288328-1d3de9be04bab144528bc8ac3",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},f=({webformatURL:a,largeImageURL:i,tags:t,likes:r,views:e,comments:s,downloads:o})=>`<li class="gallery-item">
       <a class="gallery-link" href=${i}>
         <img
          class="gallery-image"
          src=${a}
          alt=${t}
         />
        </a>
        <ul class="info-list">
           <li class="info-list-item">
             <span class="info-list-item-title">Likes</span>
             <span class="info-list-item-data">${r}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Views</span>
             <span class="info-list-item-data">${e}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Comments</span>
             <span class="info-list-item-data">${s}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Downloads</span>
             <span class="info-list-item-data">${o}</span>
           </li>
         </ul>
     </li>`,c=document.querySelector(".form"),l=document.querySelector(".gallery"),p=a=>{a.preventDefault();const i=a.target.elements[0].value.trim();if(i===""){n.warning({position:"topRight",messageSize:20,message:"Input please the data"});return}m(i).then(t=>{if(t.total===0){n.show({position:"topRight",messageSize:20,message:`Sorry, there are no images matching your search query ${i}. Please try again!`}),c.reset(),l.innerHTML="";return}console.log(t.hits);const r=t.hits.map(e=>f(e)).join("");l.innerHTML=r}).catch(t=>{n.error({message:t})})};c.addEventListener("submit",p);new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
