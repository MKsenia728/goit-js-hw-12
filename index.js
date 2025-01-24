import{a as u,i as d,S}from"./assets/vendor-B6jJ9_I0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const y=(t,s,i)=>(u.defaults.baseURL="https://pixabay.com/api/",u.get("",{params:{key:"48288328-1d3de9be04bab144528bc8ac3",q:t,per_page:i,page:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})),L=({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:e,comments:a,downloads:m})=>`<li class="gallery-item">
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
             <span class="info-list-item-data">${r}</span>
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
     </li>`,P=()=>{const t=document.createElement("p");return t.classList.add("loader"),t.innerHTML="Loading images, please wait...</p>",t.style.textAlign="center",t},b=document.querySelector(".form"),l=document.querySelector(".gallery"),o=document.querySelector(".load-more-btn"),p={position:"topRight",messageSize:20};let h,g=15,c,n="";const f=P();let v;const w=()=>{h=new S(".gallery a",{captionsData:"alt",captionDelay:250}),h.refresh()},$=()=>{const{height:t}=v.getBoundingClientRect();window.scrollBy(0,t*2)},x=async t=>{if(t.preventDefault(),o.classList.add("is-hidden"),c=1,l.insertAdjacentElement("afterend",f),n=t.target.elements[0].value.trim(),n===""){d.warning({...p,message:"Input please the data"}),f.remove();return}try{const{data:{hits:s,totalHits:i}}=await y(n,c,g);if(b.reset(),s.length===0){d.show({...p,message:`Sorry, there are no images matching your search query ${n}. Please try again!`}),l.innerHTML="";return}const r=s.map(e=>L(e)).join("");l.innerHTML=r,c*g<i&&(o.classList.remove("is-hidden"),o.addEventListener("click",E)),w()}catch(s){console.log(s),d.error({...p,message:s.message})}finally{f.remove()}},E=async()=>{try{c++,o.classList.add("is-hidden"),l.insertAdjacentElement("afterend",f);const{data:{hits:t,total:s}}=await y(n,c,g),i=t.map(r=>L(r)).join("");l.insertAdjacentHTML("beforeend",i),v=l.firstChild,$(),w(),c*g>=s?(o.classList.add("is-hidden"),o.removeEventListener("click",E),d.show({...p,message:`Sorry, there are no images matching your search query ${n}. Please try again!`})):o.classList.remove("is-hidden")}catch(t){d.error({...p,message:t.message})}finally{f.remove()}};b.addEventListener("submit",x);
//# sourceMappingURL=index.js.map
