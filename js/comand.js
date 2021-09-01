const boxs  = document.querySelectorAll("div.box-img");
for(let box of boxs){
    box.addEventListener("mouseover",function(){
        const parent = box.closest(".comand-cart")
        const text = parent.querySelector("p.name") 
        text.classList.add("name-color")
        this.addEventListener("mouseout",function(){
            text.classList.remove("name-color")
        })
    })
}
