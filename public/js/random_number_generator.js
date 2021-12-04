const min = document.querySelector("#min"),
    max = document.querySelector("#max"),
    quantity = document.querySelector("#quantity"),
    generate = document.querySelector("#generate"),
    result = document.querySelector("#result");

generate.addEventListener('click', generator)

function generator() {
    result.innerHTML = "";

    let minimum = parseInt(min.value),
        maximum = parseInt(max.value) + 1,
        quantityOfNumbers = parseInt(quantity.value);

    for (let quanti = 0; quanti < quantityOfNumbers; quanti++) {
        result.innerHTML += Math.floor(Math.random() * (maximum - minimum)) + minimum + (quanti < quantityOfNumbers - 1 ? ', ' : '');
    }
}