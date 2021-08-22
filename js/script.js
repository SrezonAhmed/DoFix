//selectors
const inputText = document.querySelector('.createCard');
const addButton = document.querySelector('.addButton');
const enterContainer = document.querySelector('.enter-card');

//event listeners

//add, edit, and delete
addButton.addEventListener('click', addInput);



//functions
function addInput() {
    //add and edit input text
    let editInput = document.createElement("INPUT");
    editInput.classList.add('edit-input');
    editInput.setAttribute("value", inputText.value)
    enterContainer.appendChild(editInput);
    inputText.value = "";

    //delete input text
    let deleteButton = document.createElement("BUTTON");
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = 'delete';
    enterContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click', function () {
        enterContainer.removeChild(editInput);
        enterContainer.removeChild(deleteButton);
    })

}
