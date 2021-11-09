var header = document.querySelector('header');
//leeg wagentje

var toevoegen = document.querySelector('button.voegToe'); 
//voeg toe aan winkelmandje

toevoegen.addEventListener('click', winkelwagentje);

function winkelwagentje(event){
    event.preventDefault();
    header.classList.toggle('add');
}
