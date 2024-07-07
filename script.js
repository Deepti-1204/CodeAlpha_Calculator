let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
            } else if (e.target.innerHTML == 'C') {
                string = "";
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        } catch (error) {
            input.value = 'Syntax Error';
            string = "";
        }
    });
});

function appendInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Syntax Error';
    }
}
