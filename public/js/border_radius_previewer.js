const [
    previewer,
    color,
    radiusTop,
    radiusRight,
    radiusBottom,
    radiusLeft,
    valueTop,
    valueRight,
    valueBottom,
    valueLeft
] = ["previewer", "color", "radius-top", "radius-right", "radius-bottom", "radius-left", "value-top", "value-right", "value-bottom", "value-left"].map(element => document.querySelector(`#${element}`))

color.addEventListener("input", () => {
    previewer.style.backgroundColor = color.value;
    radiusTop.style.accentColor = color.value;
    radiusRight.style.accentColor = color.value;
    radiusBottom.style.accentColor = color.value;
    radiusLeft.style.accentColor = color.value;
    valueTop.style.backgroundColor = color.value;
    valueRight.style.backgroundColor = color.value;
    valueBottom.style.backgroundColor = color.value;
    valueLeft.style.backgroundColor = color.value;
});

radiusTop.addEventListener("input", () => {
    previewer.style.borderTopLeftRadius = `${radiusTop.value}%`;
    valueTop.children[0].innerText = `${radiusTop.value}%`;
});

radiusRight.addEventListener("input", () => {
    previewer.style.borderTopRightRadius = `${radiusRight.value}%`;
    valueRight.children[0].innerText = `${radiusRight.value}%`;
});

radiusBottom.addEventListener("input", () => {
    previewer.style.borderBottomLeftRadius = `${radiusBottom.value}%`;
    valueBottom.children[0].innerText = `${radiusBottom.value}%`;
});

radiusLeft.addEventListener("input", () => {
    previewer.style.borderBottomRightRadius = `${radiusLeft.value}%`;
    valueLeft.children[0].innerText = `${radiusLeft.value}%`;
});

const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

function randomColor() {
    let setColor = "#"

    for (let index = 0; index < 6; index++) {
        setColor += hexadecimal[Math.floor(Math.random() * (15 - 0))]
    }

    color.value = setColor
    previewer.style.backgroundColor = setColor;
    radiusTop.style.accentColor = setColor
    radiusRight.style.accentColor = setColor
    radiusBottom.style.accentColor = setColor
    radiusLeft.style.accentColor = setColor

    valueTop.style.backgroundColor = setColor
    valueRight.style.backgroundColor = setColor
    valueBottom.style.backgroundColor = setColor
    valueLeft.style.backgroundColor = setColor
}

randomColor()