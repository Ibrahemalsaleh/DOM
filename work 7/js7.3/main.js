const newItemInput = document.getElementById('new-item');
const addButton = document.getElementById('add-button');
const itemList = document.getElementById('item-list');

addButton.addEventListener('click', addItem);

function addItem() {
    const itemText = newItemInput.value.trim(); // Get item text and remove leading/trailing spaces

    if (itemText !== "") {
        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <span>${itemText}</span>
            <button class="delete-button">Delete</button>
        `;

        itemList.appendChild(newItem);

        // Add event listener to the delete button of the new item
        const deleteButton = newItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            itemList.removeChild(newItem);
        });

        newItemInput.value = ''; // Clear input field
        newItemInput.focus();   // Focus on the input field
    }
}

// Add item when Enter key is pressed in the input field
newItemInput.addEventListener('keyup', function(event) {
  if (event.key === "Enter") {
    addItem();
  }
});