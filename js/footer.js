const footerLinks = document.querySelector(".site-links");
footerLinks.addEventListener("click",function(ev){
    if(ev.target.tagName == "A"){
        ev.preventDefault();
        const elem = document.querySelector(`.${ev.target.dataset.scrollElem}`)
       elem.scrollIntoView({
           block:"start",
           inline:"start",
           behavior:"smooth"
       });
    }
})