import{i as o,S as f}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=s=>{const a=new URLSearchParams({key:"48288328-1d3de9be04bab144528bc8ac3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`https://pixabay.com/api/?${a}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})},u=({webformatURL:s,largeImageURL:a,tags:i,likes:r,views:e,comments:t,downloads:n})=>`<li class="gallery-item">
       <a class="gallery-link" href=${a}>
         <img
          class="gallery-image"
          src=${s}
          alt=${i}
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
             <span class="info-list-item-data">${t}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Downloads</span>
             <span class="info-list-item-data">${n}</span>
           </li>
         </ul>
     </li>`,d=()=>{const s=document.createElement("p");return s.classList.add("loader"),s.innerHTML="Loading images, please wait...</p>",s.style.textAlign="center",s},c=document.querySelector(".form"),m=document.querySelector(".gallery"),l={position:"topRight",messageSize:20},g=s=>{s.preventDefault();const a=d();c.insertAdjacentElement("afterend",a);const i=s.target.elements[0].value.trim();if(i===""){o.warning({...l,message:"Input please the data"}),a.remove();return}p(i).then(r=>{if(c.reset(),a.remove(),r.total===0){o.show({...l,message:`Sorry, there are no images matching your search query ${i}. Please try again!`}),m.innerHTML="";return}const e=r.hits.map(t=>u(t)).join("");m.innerHTML=e,new f(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(r=>{o.error({...l,message:r})})};c.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
