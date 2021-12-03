const markPreviewer = document.querySelector('#mark-previewer'),
    markEdit = document.querySelector('#mark-edit')

markEdit.addEventListener('input', markdownPreviewer)


function markdownPreviewer() {
    let elements = markEdit.value.split('\n'),
        text = ''

    elements.forEach(element => {

        if (element.indexOf('######') === 0) {
            element = element.substring(6, element.length)
            text += `<div><h6>${element}</h6></div>`
        } else if (element.indexOf('#####') === 0) {
            element = element.substring(5, element.length)
            text += `<div><h5>${element}</h5></div>`
        } else if (element.indexOf('####') === 0) {
            element = element.substring(4, element.length)
            text += `<div><h4>${element}</h4></div>`
        } else if (element.indexOf('###') === 0) {
            element = element.substring(3, element.length)
            text += `<div><h3>${element}</h3></div>`
        } else if (element.indexOf('##') === 0) {
            element = element.substring(2, element.length)
            text += `<div><h2>${element}</h2></div>`
        } else if (element.indexOf('#') === 0) {
            element = element.substring(1, element.length)
            text += `<div><h1>${element}</h1></div>`
        } else if (element.indexOf('**') != -1) {
            let word = element.substring(element.indexOf('**') + 2, element.lastIndexOf('**')),
                start = element.substring(0, element.indexOf('**')),
                end = element.substring(element.lastIndexOf('**') + 2, element.length)
            text += `<div>${start} <strong>${word}</strong> ${end}</div>`
        } else if (element.indexOf('__') != -1) {
            let word = element.substring(element.indexOf('__') + 2, element.lastIndexOf('__')),
                start = element.substring(0, element.indexOf('__')),
                end = element.substring(element.lastIndexOf('__') + 2, element.length)
            text += `<div>${start} <strong>${word}</strong> ${end}</div>`
        } else if (element.indexOf('![') != -1) {
            let target = element.substring(element.indexOf('![') + 2, element.indexOf(']')),
                link = element.substring(element.indexOf('(') + 1, element.indexOf(')'))
            text += `<div><img style='width: 100%; height: 400px;' alt='${target}' src='${link}'></img></div>`
        } else if (element.indexOf('[') != -1) {
            let target = element.substring(element.indexOf('[') + 1, element.indexOf(']')),
                link = element.substring(element.indexOf('(') + 1, element.indexOf(')'))
            text += `<div><a href='${link}'>${target}</a></div>`
        } else if (element.indexOf('<http') != -1) {
            let link = element.substring(element.indexOf('<') + 1, element.indexOf('>')),
                start = element.substring(0, element.indexOf('<')),
                end = element.substring(element.indexOf('>') + 1, element.length)
            text += `<div>${start} <a href='${link}'>${link}</a> ${end}</div>`
        } else if (element[0] === '>') {
            element = element.substring(1, element.length)
            text += `<div><blockquote>${element}</blockquote></div>`
        } else if (element.indexOf('*') != -1) {
            element = element.substring(1, element.length)
            text += `<div><li>${element}</li></div>`
        } else {
            text += `<div>${element}</div>`
        }

        if (element === '') {
            text += `<br>`
        }
    })

    markPreviewer.innerHTML = text
}
