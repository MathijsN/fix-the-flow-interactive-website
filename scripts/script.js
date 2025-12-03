const planVisitButton = document.querySelector('.plan-visit-button').addEventListener('click', removeButton)
document.querySelector('.close-popover-button').addEventListener('click', addButton)

function removeButton() {
    planVisitButton.style.visibility = "hidden";
}

function addButton() {
    planVisitButton.style.visibility = "visible";
}