import{a as m,i as l,S as d}from"./assets/vendor-B6jJ9_I0.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=s=>(m.defaults.baseURL="https://pixabay.com/api/",m.get("",{params:{key:"48288328-1d3de9be04bab144528bc8ac3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})),g=({webformatURL:s,largeImageURL:a,tags:r,likes:i,views:e,comments:t,downloads:n})=>`<li class="gallery-item">
       <a class="gallery-link" href=${a}>
         <img
          class="gallery-image"
          src=${s}
          alt=${r}
         />
        </a>
        <ul class="info-list">
           <li class="info-list-item">
             <span class="info-list-item-title">Likes</span>
             <span class="info-list-item-data">${i}</span>
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
     </li>`,y=()=>{const s=document.createElement("p");return s.classList.add("loader"),s.innerHTML="Loading images, please wait...</p>",s.style.textAlign="center",s},c=document.querySelector(".form"),p=document.querySelector(".gallery"),o={position:"topRight",messageSize:20};let f;const h=async s=>{s.preventDefault();const a=y();c.insertAdjacentElement("afterend",a);const r=s.target.elements[0].value.trim();if(r===""){l.warning({...o,message:"Input please the data"}),a.remove();return}try{const{data:{hits:i}}=await u(r);if(c.reset(),a.remove(),i.length===0){l.show({...o,message:`Sorry, there are no images matching your search query ${r}. Please try again!`}),p.innerHTML="";return}const e=i.map(t=>g(t)).join("");p.innerHTML=e,f=new d(".gallery a",{captionsData:"alt",captionDelay:250}),f.refresh()}catch(i){l.error({...o,message:i})}};c.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
