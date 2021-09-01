const navList = document.querySelector(".navigation");
const header  = document.querySelector(".header")
navList.addEventListener("mouseover",function(ev){
    if(ev.target.tagName == "A"){
        const parent = ev.target.parentElement.querySelector(".line");
        parent.classList.add("line-hover");
    }
})

navList.addEventListener("mouseout",function(ev){
    if(ev.target.tagName == "A"){
        const parent = ev.target.parentElement.querySelector(".line");
        parent.classList.remove("line-hover");
    }
})

navList.addEventListener("click",function(ev){
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

window.addEventListener("scroll",function(ev){
    if(document.documentElement.scrollTop > 10 || ev.pageYoffset > 0){
        header.style.backgroundColor = "rgb(63, 81, 160)"
    }else{
        header.style.backgroundColor = "rgba(63, 81, 160, 0.3)"
    }
})