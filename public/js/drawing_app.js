const screen = document.querySelector('#screen'),
    lineWidth = document.querySelector('#width'),
    title = document.querySelector('#drawn-title'),
    screenWidth = document.body.clientWidth,
    screenHeight = document.body.clientHeight

screen.setAttribute('width', screenWidth - ((screenWidth * 2) / 100))
screen.setAttribute('height', screenHeight - ((screenHeight * 12) / 100))

let ctx = screen.getContext('2d'),
    drawing = false,
    clearing = false
color = '#000000'

screen.addEventListener('mousedown', () => {
    ctx.lineWidth = parseInt(lineWidth.value)

    if (!clearing) {
        ctx.strokeStyle = color
    } else {
        ctx.strokeStyle = '#FFFFFF'
    }

    drawing = true
})

screen.addEventListener('mouseup', () => drawing = false)

screen.addEventListener('mousemove', event => {
    if (drawing) {
        let x = event.clientX - screen.offsetLeft,
            y = event.clientY - screen.offsetTop

        ctx.beginPath()
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.moveTo(x, y)
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.closePath()
    }
})

const btnDrawing = document.querySelector('#draw'),
    btnClear = document.querySelector('#clear'),
    btnPaint = document.querySelector('#paint'),
    btnText = document.querySelector('#text'),
    btnSave = document.querySelector('#save'),
    lineColor = document.querySelector('#color')



lineColor.addEventListener('input', () => {
    color = lineColor.value
    btnDrawing.style.color = color
    btnPaint.style.color = color
})

btnDrawing.addEventListener('click', () => clearing = false)

btnClear.addEventListener('click', () => clearing = true)

btnText.addEventListener('click', event => {

    function addText(e) {
        let x = event.clientX - screen.offsetLeft,
            y = event.clientY - screen.offsetTop

        ctx.textStyle = lineColor.value
        ctx.fillText('Hello world', x, y)

        screen.removeEventListener('click', addText, false)
    }

    screen.addEventListener('click', addText, false)

})

btnPaint.addEventListener('click', () => {
    screen.style.cursor = 'cell'

    function coloring(e) {
        ctx.fillStyle = lineColor.value
        ctx.fillRect(0, 0, screenWidth, screenHeight)
        screen.style.cursor = 'crosshair'

        screen.removeEventListener('click', coloring, false)
    }

    screen.addEventListener('click', coloring, false)
})

btnSave.addEventListener('click', () => {
    let download = document.createElement('a')
    download.setAttribute('download', title.value)
    download.href = screen.toDataURL('image/png', 1)
    download.click()
})