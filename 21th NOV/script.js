const boxes = document.getElementsByClassName("child");
const boxColor = document.getElementById("color-input");
const remove = document.getElementById("color-remove");

let isMouseClicked = true;
let color = "blue";

// Handle mouse down and up for the "remove" button
remove.onmousedown = () => {
    isMouseClicked = true;
    color = "white"; // Set to white when the remove button is pressed
};
remove.onmouseup = () => {
    isMouseClicked = false; // Reset mouse state on release
};

// Update color when the user selects a new color
boxColor.onchange = () => {
    color = boxColor.value;
};

// Add event listeners for box interaction
for (let i = 0; i < boxes.length; i++) {
    boxes[i].onmousedown = () => {
        if (isMouseClicked) {
            boxes[i].style.backgroundColor = color;
            console.log("moouse clicked")
        }
    };
}

// Optional: Reset `isMouseClicked` globally on mouse up
document.body.onmouseup = () => {
    isMouseClicked = false;
};
