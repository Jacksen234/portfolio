const overlayNav = document.querySelector('#overlayNav');
const hamLines = document.querySelectorAll('.ham-line');

let openBool = false;

function navButton(){
    openBool = !openBool;
    if (openBool){
        openOverlay();
    }else{
        closeOverlay();
    }
}

function openOverlay(){
    overlayNav.classList.add('overlay-width')
    hamLines.forEach(line => line.classList.add('menu-open'));
}
function closeOverlay(){
    overlayNav.classList.remove('overlay-width');
    hamLines.forEach(line => line.classList.remove('menu-open'));
}
