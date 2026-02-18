import{a as w,S,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const b="https://pixabay.com/api/",v="54690330-eb245c6ad75148e763d2e54fd";async function u(a,o){const e={key:v,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await w.get(b,{params:e})).data}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const o=a.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img 
          src="${e.webformatURL}" 
          alt="${e.tags}" 
          class="img-item"
        />
      </a>
      <div class="info">
        <p><span>Likes:</span> ${e.likes}</p>
        <p><span>Views:</span> ${e.views}</p>
        <p><span>Comments:</span> ${e.comments}</p>
        <p><span>Downloads:</span> ${e.downloads}</p>
      </div>
    </li>
  `).join("");p.insertAdjacentHTML("beforeend",o),q.refresh()}function P(){p.innerHTML=""}function g(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function R(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}const B=document.querySelector(".form"),M=document.querySelector(".load-more");let i=1,l="",d=0;B.addEventListener("submit",async a=>{a.preventDefault();const o=a.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search query!",position:"topRight"});return}l=o,i=1,P(),L(),g();try{const e=await u(l,i);if(d=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits),d>15&&R()}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{y()}});M.addEventListener("click",async()=>{i+=1,g();try{const a=await u(l,i);h(a.hits);const o=Math.ceil(d/15);i>=o&&(L(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{y()}});
//# sourceMappingURL=index.js.map
