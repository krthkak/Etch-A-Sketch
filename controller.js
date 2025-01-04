let deafaultGridSize = 16;

createDiv(deafaultGridSize);

function showPrompt(){
    let size = prompt("Enter the size of the grid");
    if(size>0 && size<=100){
        clearContainer();
        createDiv(size);
        // Update the CSS variable for grid size
        document.documentElement.style.setProperty('--grid-size', size);
    }
    else if(size>100 || size<=0){
        alert("Enter a number between 1 and 100");
    }

}

function createDiv(numberOfSquares){
    let total = numberOfSquares*numberOfSquares;
    let container = document.querySelector('.container');
    for(let i=0;i<total;i++){
        let div = document.createElement('div');
        div.textContent =i+1
        div.classList.add('flex-item');
        container.appendChild(div);
    }
}

function clearContainer(){
    let container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}   