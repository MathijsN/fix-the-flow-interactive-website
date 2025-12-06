const planVisitButton = document.querySelector('.plan-visit-button')
const closePopoverButton =  document.querySelector('.close-popover-button')
const closeMenuButton = document.querySelector('header button')
const header = document.querySelector('header')

planVisitButton.addEventListener('click', removeButton)
closePopoverButton.addEventListener('click', addButton)
closeMenuButton.addEventListener('click', toggleMenu)



function removeButton() {
    planVisitButton.style.visibility = "hidden";
}

function addButton() {
    planVisitButton.style.visibility = "visible";
}

function toggleMenu() {
    header.classList.toggle('menu-open')
}
