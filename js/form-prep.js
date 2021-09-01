
const form = document.querySelector(".prepos-form");
form.addEventListener("focusin",function(e){
    if(e.target.tagName == "INPUT"){
        if(e.target.value.length > 0) return
        e.target.style.borderBottom = "2px solid rgba(65, 222, 243, 0.719)"
    }
})
form.addEventListener("focusout",function(e){
    if(e.target.tagName == "INPUT"){

        if(e.target.value.length > 0) e.target.style.borderBottom = "2px solid rgba(65, 222, 243, 0.719)" //stay blue
        else e.target.style.borderBottom = "2px solid rgba(230, 229, 229, 0.719)" //make gray

    }
})
