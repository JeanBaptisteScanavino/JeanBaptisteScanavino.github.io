//création de la grille d'affichage

function handleInitAnt(){
    console.log("coucou");
    let timer = setInterval(dynGrid,50);
};
let ant = {
    x: 100,
    y: 100,
    direction: 'up',
};

let nodeContain = document.querySelector(".contain");

function createGrid() {
    for (let c = 0; c < 200; c++) {
        let newDiv = document.createElement("div");
        newDiv.id = 'col-' + c
        nodeContain.append(newDiv);

        for (let l = 0; l < 200; l++) {
            let newDiv = document.createElement("div");

            newDiv.classList.add('cell');
            newDiv.id = 'cell-' + c + '-' + l;
            nodeCell = document.querySelector("#col-" + c)
            nodeCell.append(newDiv);
        }
    }
}

function dynGrid() {
    let nodeAnt = document.querySelector('#cell-' + ant.x + '-' + ant.y);
    nodeAnt.classList.add('ant');
    moveAnt();
}
function moveAnt() {
    let nodeAnt = document.querySelector('#cell-' + ant.x + '-' + ant.y);
    let listOfClass = [];
    listOfClass = nodeAnt.classList;
    listOfClass = listOfClass.value;

    if (listOfClass.search('cell-black') > 0) {
        moveLeft();
    } else {
        moveRight();
    };
};
function moveLeft() {
    document.querySelector('#cell-' + ant.x + '-' + ant.y).classList.remove("cell-black");
    document.querySelector('#cell-' + ant.x + '-' + ant.y).classList.remove("ant");
    switch (ant.direction) {
        case 'up':
            ant.x--;
            ant.direction = 'left';
            break;
        case 'down':
            ant.x++;
            ant.direction = 'right';
            break;
        case 'left':
            ant.y++;
            ant.direction = 'down';
            break;
        case 'right':
            ant.y--;
            ant.direction = 'up';
            break;
    }
    testOut();
};
function testOut()
{
    if (ant.x > 199 || ant.x <1 || ant.y > 199 || ant.y < 0 ){
        clearInterval(timer);
    }
}

function moveRight() {
    document.querySelector('#cell-' + ant.x + '-' + ant.y).classList.add("cell-black");
    document.querySelector('#cell-' + ant.x + '-' + ant.y).classList.remove("ant");
    switch (ant.direction) {
        case 'up':
            ant.x++;
            ant.direction = 'right';
            break;
        case 'down':
            ant.x--;
            ant.direction = 'left';
            break;
        case 'left':
            ant.y--;
            ant.direction = 'up';
            break;
        case 'right':
            ant.y++;
            ant.direction = 'down';
            break;
    }
};
createGrid();
document.addEventListener('DOMContentLoaded', handleInitAnt);
