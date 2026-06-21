let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let bgcolor = document.querySelector("body")
let navElem = document.querySelector('nav');
let navIcon =  document.getElementById("nav-icon")

window.addEventListener('DOMContentLoaded', () => {
    selectElem.value = 'light';
    changeTheme(); 
});

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if      (current === 'dark') {
        // code for changes to colors and logo
    }
    else if (current === 'light') {
        
    }
    else if (current === '179') {
        
    }
    else if (current === '494') {
        
    }
    else if (current === '497') {
        
    }
    else if (current === "677") {
        bgcolor.style.backgroundColor = "#0A2D1C";
        navElem.style.backgroundColor = "#9A8FAA";
        navIcon.setAttribute ('src', "../images/espurr2.png")
    }
        
    else {
        // code for changes to colors and logo
    }
}           
                    