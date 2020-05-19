let btn = document.querySelector('.navbar-toggler');
console.log(btn);

let menu = document.querySelector('.navbar-collapse');
console.log(menu);

btn.addEventListener('click' , e=>{
    console.log('a');
    
    if(menu.classList.contains('collapse')){
        menu.classList.remove('collapse')
    }
    else menu.classList.add('collapse')
})