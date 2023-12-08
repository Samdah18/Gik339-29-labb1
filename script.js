const checkboxElement = document.getElementById('divStyle');

const textFieldsCollection = document.querySelectorAll('.textfield');

const buttonElement = document.getElementById('myButton');

const divElement = document.getElementById('myDiv');

function handleInputEvent(e) {
    console.log('Avsändare:', e.target);

    const nameAttribute = e.target.name;

    if (nameAttribute === 'content') {
        divElement.innerHTML = e.target.value;
    }
}

textFieldsCollection.forEach(function(textField) {
    textField.addEventListener('input', handleInputEvent);
});


document.addEventListener("DOMContentLoaded", function() {
    var colorInput = document.getElementById('color'); 

    checkboxElement.addEventListener("change", function() {
        var color = colorInput.value; 

        divElement.style.backgroundColor = color;

        console.log("Vald färg:", color);
    });

    buttonElement.addEventListener("click", function () {
        divElement.remove();
    });
});
