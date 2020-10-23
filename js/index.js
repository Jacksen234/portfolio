const overlayNav = document.querySelector('#overlayNav');
const hamLines = document.querySelectorAll('.ham-line');
/*const hamBtn = document.querySelector('#hamMenu');*/
const $nav = $('#overlayNav');
const $ham = $('#hamMenu');

let openBool = false;

function navButton(){
    openBool = !openBool;
    if (openBool){
        openOverlay();
    }else{
        closeOverlay();
    }
}

document.addEventListener('click', (ev) => {
    if (openBool && !$nav.is(ev.target) && $nav.has(ev.target).length === 0){
        if (!$ham.is(ev.target) && $ham.has(ev.target).length === 0){
            closeOverlay();
            openBool = !openBool;
        }
    }
});

function openOverlay(){
    overlayNav.classList.add('overlay-width')
    hamLines.forEach(line => line.classList.add('menu-open'));
}
function closeOverlay(){
    overlayNav.classList.remove('overlay-width');
    hamLines.forEach(line => line.classList.remove('menu-open'));
}

const animationLength = 6000;
//svg try
let svg = new Walkway({
    selector: '#strokeSvg',
    duration: animationLength.toString(),
    easing: function (t) {
        return t*t;
    }
});
svg.draw();
let svgInterval = setInterval(() => {
    svg.redraw();
}, animationLength + 1000);

let animationScrolldown = bodymovin.loadAnimation({
    container: document.getElementById('scrolldown'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/scrollDown.json'
});


// Smooth Scroll to Projects

const scrollTrigger = document.getElementById('scrolldown');
let scrollTarget = document.getElementById(scrollTrigger.getAttribute("data-scroll-target"));

scrollTrigger.addEventListener('click', () => {
  scrollTarget.scrollIntoView({behavior: "smooth"});
});

// Side menu functionality

const navItems = Array.from(document.getElementsByClassName('nav-item'));
navItems.forEach(item => {
  item.addEventListener('click', () => {
    let targetId = item.getAttribute('data-scroll-target');
    document.getElementById(targetId).scrollIntoView({behavior: "smooth"});
  });
});

//tech tooltips
let TechSVGS = Array.from(document.getElementsByClassName('svg-wrapper'));
let allMentionItems = Array.from(document.getElementsByClassName('mention-item'));
let allTechSVGS = TechSVGS.concat(allMentionItems)
allTechSVGS.forEach(item => {
    item.onmouseover = () => showTooltip(item);
    item.onmouseout = () => removeTooltip();
});

function showTooltip(item){
    let tooltipTitle = item.getAttribute('data-lang');
    let tooltipDesc = item.getAttribute('data-desc');
    let svgFile = `${item.getAttribute('data-svg')}-01.svg`;
    let outerBox= document.createElement('div');
    outerBox.classList.add('tooltip-box');
    outerBox.setAttribute('id', 'currentTooltip');
    let logoSvg = document.createElement('img');
    logoSvg.setAttribute('src', `img/tech-logos/${svgFile}`);
    logoSvg.classList.add('tooltip-logo');
    outerBox.appendChild(logoSvg);

    let textBox = document.createElement('div');
    textBox.classList.add('tooltip-text');
    let titleElement = document.createElement('h5');
    titleElement.innerText = tooltipTitle;
    let descElement = document.createElement('p');
    descElement.innerText = tooltipDesc;

    textBox.appendChild(titleElement);
    textBox.appendChild(descElement);
    outerBox.appendChild(textBox);

    item.appendChild(outerBox);
}
function removeTooltip(){
    let curToolTip = document.getElementById('currentTooltip')
    curToolTip.style.animation = "smooth-out-tooltip 300ms"
    curToolTip.remove();
}

