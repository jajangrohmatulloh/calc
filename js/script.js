const buttons = document.getElementsByClassName('buttons')[0];
let input = document.getElementsByClassName('input')[0];
let operand1;
let operand2;

document.getElementsByClassName('toggle')[0].addEventListener('click', function () {
    this.children[0].classList.toggle('stroke1');
    this.children[1].classList.toggle('stroke2');
    this.children[2].classList.toggle('stroke3');
});

buttons.addEventListener('click', function (e) {
    numbers(e);
    decimal(e);
    deletes(e);
    operators(e);
    equals(e);
});

function numbers(e) {
    if (input.textContent.length == 16) {
    } else {
        switch (e.target.value) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (input.textContent == '0') {
                    input.innerHTML = "";
                }
                input.append(e.target.value);
        }


    }
}

function decimal(e) {
    if (e.target.textContent == '+/-') {
        const [...arr] = input.textContent;
        if (input.textContent.includes('-')) {
            arr.shift();
            input.innerHTML = arr.join('');
        } else {
            arr.unshift('-');
            input.innerHTML = arr.join('');
        }
    } else if (e.target.textContent == ',') {
        const [...arr] = input.textContent;
        if (input.textContent.includes('.')) {
            return;
        } else {
            arr.push('.');
            input.innerHTML = arr.join('');
        }
    }
}

function deletes(e) {
    if (e.target.textContent == 'C' || e.target.textContent == 'CE') {
        input.innerHTML = '0';
        input.previousElementSibling.innerHTML = '';
    } else if (e.target.textContent == 'DEL') {
        input.textContent == 'Infinity' || input.textContent == 'NaN' ? input.innerHTML = '0' : '';

        const [...del] = input.textContent;
        del.pop();
        input.innerHTML = del.join('');
        input.textContent.length == 0 ? input.innerHTML = '0' : '';
    }
}

function operators(e) {
    if (e.target.value == '+') {
        input.previousElementSibling.innerHTML = '+';
        operand1 = parseFloat(input.textContent);
        input.innerHTML = '0';
    } else if (e.target.value == '-') {
        input.previousElementSibling.innerHTML = '-';
        operand1 = parseFloat(input.textContent);
        input.innerHTML = '0';
    } else if (e.target.value == 'X') {
        input.previousElementSibling.innerHTML = 'X';
        operand1 = parseFloat(input.textContent);
        input.innerHTML = '0';
    } else if (e.target.value == '/') {
        input.previousElementSibling.innerHTML = '/';
        operand1 = parseFloat(input.textContent);
        input.innerHTML = '0';
    } else if (e.target.value == 'squared') {
        input.innerHTML = Math.pow(input.textContent, 2);
    } else if (e.target.value == 'sqrt') {
        input.innerHTML = Math.sqrt(input.textContent);
    } else if (e.target.value == 'divide') {
        input.innerHTML = 1 / input.textContent;
    } else if (e.target.textContent == '%') {
        operand2 = parseFloat(input.textContent);
        input.innerHTML = operand1 % operand2;
        input.previousElementSibling.innerHTML = ''
    }
}

function equals(e) {
    if (e.target.value == '=') {
        operand2 = parseFloat(input.textContent);
        if (input.previousElementSibling.textContent == '+') {
            input.innerHTML = operand1 + operand2;
        } else if (input.previousElementSibling.textContent == '-') {
            input.innerHTML = operand1 - operand2;
        } else if (input.previousElementSibling.textContent == 'X') {
            input.innerHTML = operand1 * operand2;
        } else if (input.previousElementSibling.textContent == '/') {
            input.innerHTML = operand1 / operand2;
        }
        input.previousElementSibling.innerHTML = '';
    }
}