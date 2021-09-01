const data = {
    "bedroom":[
    
        {
            "logo":"Ліжко Люкс ЕКО",
            "img-url" :"img/bed-1-1.png",
            "url":"http://google.com"
        },
    
        {
            "logo":"Cупер Пупер Тумба!",
            "img-url" :"img/tumba-1-1.png",
            "url":"http://google.com"
        },
    
        {   
            "logo":"Ліжко Екс Клас",
            "img-url" :"img/bed-2-2.png",
            "url":"http://google.com"
        },
        {
            "logo":"Тумба для ліків",
            "img-url" :"img/tumba-2-2.png",
            "url":"http://google.com"
        },
        {
            "logo":"Ліжко для двох",
            "img-url" :"img/bed-3-3.png",
            "url":"http://google.com"
        },
    
        {
            "logo":"Модерн Тумба!",
            "img-url" :"img/tumba-3-3.png",
            "url":"http://google.com"
        },
    
        {   
            "logo":"Ліжко як в Бабусі",
            "img-url" :"img/bed-4-4.png",
            "url":"http://google.com"
        },
        {
            "logo":"Тумба з кактусом",
            "img-url" :"img/tumba-4-4.png",
            "url":"http://google.com"
        }
    ],
    "living_room":[
        {
            "logo":"Ліжко Люкс ЕКО",
            "img-url" :"img/bed-1-1.png",
            "url":"http://google.com"
        },
    
        {
            "logo":"Cупер Пупер Тумба!",
            "img-url" :"img/tumba-1-1.png",
            "url":"http://google.com"
        },
    
        {   
            "logo":"Ліжко Екс Клас",
            "img-url" :"img/bed-2-2.png",
            "url":"http://google.com"
        },
        {
            "logo":"Тумба для ліків",
            "img-url" :"img/tumba-2-2.png",
            "url":"http://google.com"
        },
        {
            "logo":"Ліжко для двох",
            "img-url" :"img/bed-3-3.png",
            "url":"http://google.com"
        },
    
        {
            "logo":"Модерн Тумба!",
            "img-url" :"img/tumba-3-3.png",
            "url":"http://google.com"
        },
    
        {   
            "logo":"Ліжко як в Бабусі",
            "img-url" :"img/bed-4-4.png",
            "url":"http://google.com"
        },
        {
            "logo":"Тумба з кактусом",
            "img-url" :"img/tumba-4-4.png",
            "url":"http://google.com"
        }
    ],
    "kids_room":[
        {
            "logo":"Ліжко Люкс ЕКО",
            "img-url" :"img/bed-1-1.png",
            "url":"http://google.com"
        },
    
        {
            "logo":"Cупер Пупер Тумба!",
            "img-url" :"img/tumba-1-1.png",
            "url":"http://google.com"
        },
    
        {   
            "logo":"Ліжко Екс Клас",
            "img-url" :"img/bed-2-2.png",
            "url":"http://google.com"
        },
        {
            "logo":"Тумба для ліків",
            "img-url" :"img/tumba-2-2.png",
            "url":"http://google.com"
        },
        {
            "logo":"Ліжко для двох",
            "img-url" :"img/bed-3-3.png",
            "url":"http://google.com"
        },
    
        {
            "logo":"Модерн Тумба!",
            "img-url" :"img/tumba-3-3.png",
            "url":"http://google.com"
        },
    
        {   
            "logo":"Ліжко як в Бабусі",
            "img-url" :"img/bed-4-4.png",
            "url":"http://google.com"
        },
        {
            "logo":"Тумба з кактусом",
            "img-url" :"img/tumba-4-4.png",
            "url":"http://google.com"
        }
    ]
}
renderMebls(data["bedroom"])


const listOfMeb = document.querySelector(".list-of-mebls");
listOfMeb.addEventListener("click",function(ev){
    if(ev.target.tagName == "LI"){
        document.querySelector(`li[data-check="checked"]`).dataset.check = ""
        ev.target.dataset.check = "checked";
        renderMebls(data[ev.target.dataset.sect])
    }
})


function createInner(text,infoText = "Більше інформації"){             //create inner div in our Cart
    const elem = document.createElement("div");
    elem.classList.add("inner-div")
    

    const logo = document.createElement("h2")
    logo.textContent = text

    const info = document.createElement("p")
    info.textContent = infoText
    const innerWrap = document.createElement("div");
    innerWrap.classList.add("innerWrap");
        innerWrap.innerHTML+=`<i class="far fa-eye"></i>`;
  
    innerWrap.appendChild(logo)
    innerWrap.appendChild(info)
    elem.appendChild(innerWrap);
   
    return elem
}

function createOuterDiv(url,innerEl){    //create outer div(cart) in our Cart

    const elem = document.createElement("div");
    elem.style.backgroundImage = `url(${url})`;
    elem.classList.add("outer-div")
    elem.appendChild(innerEl)

    return elem
}

function renderMebls(sect){             //render our info Mebls
    const roof = document.querySelector("div.mebls");
    roof.innerHTML = "";

    for(let obj of sect){
        const divInner = createInner(obj["logo"]);
        divInner.onclick = ()=>{location.href = obj["url"];}

        roof.insertAdjacentElement("beforeend",createOuterDiv(obj["img-url"],divInner));
    }
}
