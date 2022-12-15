let burger = document.querySelector(".burger");
let burger_list = document.querySelector(".burger_list");

burger.addEventListener('click', ()=>{
    if(burger_list.style.display === 'none'){
        burger_list.style.display = 'flex'
        burger.style.fontSize = '3.5rem'
        burger.innerHTML = '✖'
    }
    else{
        burger_list.style.display = 'none'
        burger.style.fontSize = '4.5rem'
        burger.innerHTML = '≡'
    }
});