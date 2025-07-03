
const items= document.querySelectorAll('.item');
const dur=20;
const tot=items.length;

items.forEach((el,i)=>{
    const delay = (dur/ tot) * (tot - i - 1) * -1;
    el.style.animationDelay = `${delay}s`;
})

