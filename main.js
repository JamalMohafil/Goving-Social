
const menuItem = document.querySelectorAll('.menu-item');

const messagenot = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages')

const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')


const theme = document.querySelector('#theme');
const  themeModal = document.querySelector('.customize-theme')


const fontSizes = document.querySelectorAll('.choose-size span')


var colorPalette = document.querySelectorAll('.choose-color span');


var root = document.querySelector(':root');

const ChangeActiveItem = ()=>{
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}

menuItem.forEach(item =>{
    item.addEventListener('click',()=>{
        ChangeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = "none";
        }else{
            document.querySelector('.notification-popup').style.display = "block";
            document.querySelector('#notifications .notification-count').style.display = "none"
        }
    })
})

const searchMessage = ()=>{
const val = messageSearch.value.toLowerCase();
console.log(val);
message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
if(name.indexOf(val) != -1){
    chat.style.display = 'flex';

}else{
    chat.style.display = 'none'
}
})
}

messageSearch.addEventListener('keyup',searchMessage)



messagenot.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
messagenot.querySelector('.notification-count').style.display = "none"
    setTimeout(()=>{
messages.style.boxShadow = "none";
}, 2000)
})

const openThemeModal = ()=>{
    themeModal.style.display = "grid";
}

const closeThemeModal = (e)=>{
if(e.target.classList.contains('customize-theme')){
    themeModal.style.display = 'none'
}

}
themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal)

const remveSizeSelector = ()=>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}



var logo = document.getElementById('logoo');
let imgBox = document.getElementById('imgBox');
let choose = document.getElementById('choose');

var logo2 = document.getElementById('logoo-2');
let imgBox2 = document.getElementById('imgBox-2');
var logo3 = document.getElementById('logoo-3');
let imgBox3 = document.getElementById('imgBox-3');
choose.onchange = function(){
imgBox.style.display = 'block';
let file = new FileReader();
imgBox2.style.display = 'block';
imgBox3.style.display = 'block';
file.readAsDataURL(choose.files[0]);
file.onload = function(){
logo.src = file.result;
logo2.src = file.result;
logo3.src = file.result;
} 
}

var pwin = document.getElementById('pwin');
var content = document.getElementById('content')
pwin.onclick = ()=>{
content.style.display = 'grid';
}

var btn_sub = document.getElementById('btn-sub');
var input = document.getElementById('input');
var content1 = document.getElementById('content');
var content2 = document.getElementById('contentt');
var name_1 = document.getElementById("name-1")

btn_sub.addEventListener('click', ()=>{
content1.style.display = "none";
content2.style.display = 'flex';
name_1.innerText =  input.value; //هي هون القيمة يلي رح تظهر
localStorage.setItem("name-1",input.value) //تخزين القيمة يلي فوق

})

window.addEventListener('load',()=>{
    const data = localStorage.getItem("name-1")
    let text = document.createTextNode()
      name_1.appendChild(text)
    })





var close_btn = document.getElementById('closee');
close_btn.onclick = ()=>{
    content2.style.display = 'none';
}
fontSizes.forEach(size =>{
  
    size.addEventListener('click',()=>{
        remveSizeSelector();

        let fontSize;
    size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left:', '5.4rem');
            root.style.setProperty('----sticky-top-right:', '5.4rem');
    
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left:', '5.4rem');
            root.style.setProperty('----sticky-top-right:', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left:', '-2rem');
            root.style.setProperty('----sticky-top-right:', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left:', '-5rem');
            root.style.setProperty('----sticky-top-right:', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left:', '-12rem');
            root.style.setProperty('----sticky-top-right:', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })


})

const remveborder = ()=>{
    colorPalette.forEach(color =>{
        color.classList.remove('active');
    })
}
colorPalette.forEach(color =>{
    color.addEventListener('click',()=>{
        remveborder();

        let primary;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

var Bg1 = document.querySelector('.bg-1');
var Bg2 = document.querySelector('.bg-2');
var Bg3 = document.querySelector('.bg-3')
let darkColorLightness;
let lightColorLightness;
let whiteColorLightness;

const changeBG = ()=>{
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);

}
Bg1.addEventListener('click',()=>{
 

    Bg1.classList.add('activate');
    Bg3.classList.remove('activate')
    Bg2.classList.remove('activate')
    changeBG();
    window.location.reload();
})
Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('activate');
    Bg1.classList.remove('activate')
    Bg3.classList.remove('activate')
    changeBG();
})

Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('activate');
    Bg1.classList.remove('activate')
    Bg2.classList.remove('activate')
    changeBG();
})

var mobile = document.getElementById('mobile-msg');
var open = document.getElementById('open');

open.onclick = ()=>{
    mobile.style.display = 'grid';
}

