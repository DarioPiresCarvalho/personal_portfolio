const containerDiv = document.querySelector('#containerDiv')
        
const container = document.createElement('div')
container.setAttribute('id','container')
containerDiv.appendChild(container)
container.style.width = "500px"
let containerWidth = 500

let defaultGrid = 16 // squares per side
let defaultColor = 'red'

function totalGridSquares() {
    let gridSquare = defaultGrid * defaultGrid // total squares
    return gridSquare
}


function create_N_divs(N) {
    for (let i = 0 ; i < N ; i++ ){
        const square_div = document.createElement('div');
        square_div.classList.add('box')
        square_div.style.padding = containerWidth / defaultGrid / 2 + 'px'
        square_div.style.margin = '0px';
        square_div.textContent = ''
        container.appendChild(square_div);
    }
}

function hoverColor(){
    const boxes = document.querySelectorAll(".box")

    boxes.forEach(box => {
        box.addEventListener('mouseover',() => {
            box.style.backgroundColor = defaultColor
        })
    })
}

const input = document.querySelector('.colorInput')
const changeColorButton = document.querySelector('.changeColor')

function changeColor(){
    changeColorButton.addEventListener('click', () => {
        if (input.value !== "") {
            defaultColor = input.value
        }
    })
}

const inputGridSize = document.querySelector('.gridSize')
const changeGridButton = document.querySelector('.changeGrid')

inputGridSize.value = 16

function gridAdjust() {
    changeGridButton.addEventListener('click', () => {
        
        if (inputGridSize.value>100 || inputGridSize.value <1) {
            inputGridSize.value = "Pick a value between 1 to 100"
        } else {
            container.textContent = ''
            defaultGrid = inputGridSize.value
            create_N_divs(totalGridSquares())
            hoverColor()
        }
    })
}


create_N_divs(totalGridSquares())
hoverColor()
changeColor()
gridAdjust()


