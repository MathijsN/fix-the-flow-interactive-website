const closeMenuButton = document.querySelector('header > button')
const header = document.querySelector('header')
const headerLabel = document.querySelector('header button form label span')

closeMenuButton.addEventListener('click', toggleMenu)


function toggleMenu() {
    header.classList.toggle('menu-open')

    if (header.classList.contains('menu-open')) {
        headerLabel.textContent = "Sluit"
    } else {
        headerLabel.textContent = "Menu"
    }
}
