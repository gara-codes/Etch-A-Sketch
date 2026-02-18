const squareContainer = document.querySelector(".squareContainer");

let mouseDown = false;

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
            squareContainer.appendChild(block);
    }
}
    }else{
        alert("Square number too big!")
    }
   
})



