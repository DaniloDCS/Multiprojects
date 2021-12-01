const video = document.querySelector("#video"),
    capture = document.querySelector("#capture"),
    modal = document.querySelector(".modal"),
    img = document.querySelector("#img"),
    btnSave = document.querySelector("#save"),
    btnDelete = document.querySelector("#delete"),
    vendorUrl = window.URL || window.webkitURL;

navigator.getUserMedia({
    video: true,
    audio: false
}, function (stream) {
    video.srcObject = stream
    video.play()
}, function (error) {
    // An error occured
    // error.code
});

capture.addEventListener("click", () => {
    let canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

    canvas.setAttribute("height", video.clientHeight)
    canvas.setAttribute("width", video.clientWidth)

    ctx.drawImage(video, 0, 0);

    modal.style.display = "flex";

    btnSave.href = canvas.toDataURL("image/png", "1.0");

    img.src = canvas.toDataURL("image/png", "1.0");
})


btnDelete.addEventListener("click", remove, false)

function remove() {
    modal.style.display = "none";
    img.href = "";
}