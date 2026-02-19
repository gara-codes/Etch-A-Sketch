const squareContainer = document.querySelector(".squareContainer");

let mouseDown = false;
let eraseState = false;
const flagLabel = document.getElementById("eraseFlag");
const clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", () => {
    const blocks = document.querySelectorAll(".blockElement");
    blocks.forEach(block => {
        block.style.backgroundColor = "";
    });
});
clearAll.addEventListener("click", () => {
    const blocks = document.querySelectorAll(".blockElement2");
    blocks.forEach(block => {
        block.style.backgroundColor = "";
    });
});


const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    if(!eraseState){
        eraseState = true;
        flagLabel.textContent = "Erase on";
    }else{
        eraseState = false;
        flagLabel.textContent = "Erase off";
    }
})

document.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

const colorPicker = document.getElementById("colorPicker");
let currentColor = "#000000"
colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
});


for(let i = 0;i<16;i++){
    for(let j = 0;j<16;j++){
        const block = document.createElement("div");
        block.classList.add("blockElement");
        block.addEventListener("mouseenter", () => {
            if(mouseDown){
                block.style.backgroundColor = currentColor;
            }
        });
        squareContainer.appendChild(block);
        block.addEventListener("mouseenter", () => {
            if(eraseState && mouseDown){
                block.style.backgroundColor = "#ffff";
            }
        });
    }
}

const button = document.getElementById("squareBtn");

button.addEventListener("click", () => {
    const numSquares = prompt("Enter the number of squares per side");
    if(numSquares <= 100){
         squareContainer.innerHTML = " ";

         const containerSize = 350;
         const blockSize = containerSize / numSquares;
    for(let i = 0;i<numSquares;i++){
        for(let j = 0;j<numSquares;j++){
            const block = document.createElement("div");
            block.classList.add("blockElement2");

            block.style.width = `${blockSize}px`;
            block.style.height = `${blockSize}px`;

            block.addEventListener("mouseenter", () => {
                if(mouseDown){
                    block.classList.add("backgroundChange");
                }
            });
            block.addEventListener("mouseenter", () => {
             if(eraseState && mouseDown){
                block.style.backgroundColor = "#ffff";
            }
        });
            squareContainer.appendChild(block);
    }
}
    }else{
        alert("Square number too big!")
    }
   
})



