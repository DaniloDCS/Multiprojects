let keys = {};

document.addEventListener("keydown", event => {
    event.preventDefault();
    let code = event.code;

    keys[code] = true;
    show();
})

document.addEventListener("keyup", event => {
    event.preventDefault();
    let code = event.code;

    keys[code] = false;
    show();

})

function show() {
    Object.keys(keys).forEach(key => {
        if (keys[key]) {
            document.querySelector(`#${key}`).classList.add("active");
        } else {
            document.querySelector(`#${key}`).classList.remove("active");
        }
    });
}