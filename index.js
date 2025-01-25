import{a as h,i as d,S}from"./assets/vendor-B6jJ9_I0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const L=(t,s,i)=>(h.defaults.baseURL="https://pixabay.com/api/",h.get("",{params:{key:"48288328-1d3de9be04bab144528bc8ac3",q:t,per_page:i,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})),b=({webformatURL:t,largeImageURL:s,tags:i,likes:o,views:e,comments:a,downloads:m})=>`<li class="gallery-item">
       <a class="gallery-link" href=${s}>
         <img
          class="gallery-image"
          src=${t}
          alt=${i}
         />
        </a>
        <ul class="info-list">
           <li class="info-list-item">
             <span class="info-list-item-title">Likes</span>
             <span class="info-list-item-data">${o}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Views</span>
             <span class="info-list-item-data">${e}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Comments</span>
             <span class="info-list-item-data">${a}</span>
           </li>
           <li class="info-list-item">
             <span class="info-list-item-title">Downloads</span>
             <span class="info-list-item-data">${m}</span>
           </li>
         </ul>
     </li>`,P=()=>{const t=document.createElement("p");return t.classList.add("loader"),t.innerHTML="Loading images, please wait...</p>",t.style.textAlign="center",t},v=document.querySelector(".form"),l=document.querySelector(".gallery"),r=document.querySelector(".load-more-btn"),p={position:"topRight",messageSize:20};let y,u=15,c,n="";const f=P();let w;const E=()=>{y=new S(".gallery a",{captionsData:"alt",captionDelay:250}),y.refresh()},$=()=>{const{height:t}=w.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})},x=async t=>{if(t.preventDefault(),r.classList.add("is-hidden"),r.removeEventListener("click",g),c=1,l.insertAdjacentElement("afterend",f),n=t.target.elements[0].value.trim(),n===""){d.warning({...p,message:"Input please the data"}),f.remove();return}try{const{data:{hits:s,totalHits:i}}=await L(n,c,u);if(v.reset(),s.length===0){d.show({...p,message:`Sorry, there are no images matching your search query ${n}. Please try again!`}),l.innerHTML="";return}const o=s.map(e=>b(e)).join("");l.innerHTML=o,c*u<i&&(r.classList.remove("is-hidden"),r.addEventListener("click",g)),E()}catch(s){console.log(s),d.error({...p,message:s.message})}finally{f.remove()}},g=async()=>{try{c++,r.classList.add("is-hidden"),l.insertAdjacentElement("afterend",f);const{data:{hits:t,total:s}}=await L(n,c,u),i=t.map(o=>b(o)).join("");l.insertAdjacentHTML("beforeend",i),w=l.firstChild,$(),E(),c*u>=s?(r.classList.add("is-hidden"),r.removeEventListener("click",g),d.show({...p,message:`You have uploaded all images for your request ${n}`})):r.classList.remove("is-hidden")}catch(t){d.error({...p,message:t.message})}finally{f.remove()}};v.addEventListener("submit",x);
//# sourceMappingURL=index.js.map
