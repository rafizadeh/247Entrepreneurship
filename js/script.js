let btn = document.querySelector('.navbar-toggler');

let menu = document.querySelector('.navbar-collapse');

btn.addEventListener('click' , e=>{
    
    if(menu.classList.contains('collapse')){
        menu.classList.remove('collapse')
    }
    else menu.classList.add('collapse')
})