let sponsor = document.querySelector(".sponsor");
let sponsor_text = document.querySelector(".sponsor p");


sponsor.addEventListener('click', ()=>{
    if(sponsor_text.style.display === 'none')
    {
        sponsor_text.style.display = 'inline'
    }
    else{
        sponsor_text.style.display = 'none';
    }
});
