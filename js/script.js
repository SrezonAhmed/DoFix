//selectors
const inputText = document.querySelector('.createCard');
const addButton = document.querySelector('.addButton');
const cardsContainer = document.querySelector('.cards-container');
//const projectContainer = document.querySelector('.project-card');

//event listeners

//add, edit, and delete
addButton.addEventListener('click', addCard);



//functions
function addCard() {
    //create cards div
    let cards = document.createElement("DIV");
    cards.classList.add("cards");
    cards.draggable;
    cardsContainer.appendChild(cards);

    //add and edit input text
    let editInput = document.createElement("INPUT");
    editInput.classList.add('edit-input');

    editInput.setAttribute("value", inputText.value)
    cards.appendChild(editInput);
    inputText.value = "";


    //delete input text
    let deleteButton = document.createElement("BUTTON");
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = 'delete';
    cards.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        cards.removeChild(editInput);
        cards.removeChild(deleteButton);
    })

}

function deleteCard() {

}
