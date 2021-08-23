//selectors
const inputText = document.querySelector('.createCard');
const addButton = document.querySelector('.addButton');
const cardsContainer = document.querySelector('.cards-container');
const lists = document.querySelector('.lists');


let draggedCard = false;
//const projectContainer = document.querySelector('.project-card');

//event listeners

//add, edit, and delete
addButton.addEventListener('click', addCard);



//functions
function addCard() {
    //create cards div
    let cards = document.createElement("DIV");
    cards.classList.add("cards");
    cards.setAttribute("draggable", true);
    cardsContainer.appendChild(cards);

    for (let i = 0; i < cards.length; i++) {
        const cardsItem = cards[i];

        cardsItem.addEventListener('dragstart', function () {
            draggedCard = cardsItem;
            setTimeout(function () {
                cardsItem.style.display = 'none';
            }, 0);

        });

        cardsItem.addEventListener('dragend', function () {
            setTimeout(function () {
                draggedCard.style.display = 'block';
                draggedCard = null
            }, 0);

        });

        for (let j = 0; j < lists.length; j++) {
            const listItem = lists[j];

        }

    }

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
        cards.remove();
    })



}


function dragging() {
    draggedCard = cards;
    this.style.display = 'none';
}

function dragend() {
    setTimeout(function () {

    }, 0);

}
