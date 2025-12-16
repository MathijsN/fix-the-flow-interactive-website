const closeMenuButton = document.querySelector('header > button')
const header = document.querySelector('header')
const headerLabel = document.querySelector('header button form label span')
const formPopoverButton = document.querySelector('.popover-form-button')
const progressbar = document.querySelector('progress')
const kaartjesP = document.querySelector('.checkout-progressbar p:nth-of-type(2)')
const datumP = document.querySelector('.checkout-progressbar p:nth-of-type(3)')

closeMenuButton.addEventListener('click', toggleMenu)
formPopoverButton.addEventListener('click', progressForm)


function toggleMenu() {
    header.classList.toggle('menu-open')

    if (header.classList.contains('menu-open')) {
        headerLabel.textContent = "Sluit"
    } else {
        headerLabel.textContent = "Menu"
    }
}

// Progressbar value op variabele zetten om later te kunnen updaten
let progressValue = progressbar.value

function progressForm(e) {
    e.preventDefault()
    console.log(progressValue)

    // De progress value moet 1 omhoog bij elke klik
    progressValue += 1
    
    // Terug koppelen aan HTML
    progressbar.value = progressValue;  

    // Kleurtjes aan teksten toevoegen bij juiste value van progress bar
    if (progressValue >= 2) {
        kaartjesP.classList.add('active-form-p')
    }
    if (progressValue >= 3) {
        datumP.classList.add('active-form-p')
    }
}