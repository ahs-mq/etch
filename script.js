let container = document.getElementById("main");
function createGrid(cells){
    let grid = `calc(100%/${cells})`;
    for(i = 0; i < cells*cells; i++){
        let box = document.createElement("div");
        box.classList.add("sketch");
        box.style.width = grid;
        box.style.height = grid;
        container.appendChild(box);
    }
    
}
createGrid(16);

let board = document.getElementsByClassName("sketch");

function draw(){
    let a = 1;
    for (let i = 0; i < board.length;i++){
        board[i].addEventListener("mouseover", ()=>{
            let ran = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
            board[i].style.opacity = a + 0.1;
            console.log(a)
            board[i].style.backgroundColor = ran;
        });
    };
}

draw();

let custom = document.getElementById("custom");

custom.addEventListener("click", ()=>{
    let num = prompt("Enter grid size (max 100)");
    if (num >= 100){
        window.alert("Error! grid size over 100!");
    } else {
        container.innerHTML = '';
        createGrid(num);
        draw();
    }
});