/* Efek masuk konten, tanpa mengubah mekanisme cover */
(()=>{
  'use strict';
  const root=document.getElementById('invitation');
  if(!root||!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const targets=root.querySelectorAll('.inner, .hero-content, .footer h2');
  targets.forEach(el=>el.classList.add('ulido-inview'));
  root.classList.add('ulido-motion');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('ulido-visible');observer.unobserve(entry.target)}});
  },{threshold:.08,rootMargin:'0px 0px 50px 0px'});
  targets.forEach(el=>observer.observe(el));
})();
