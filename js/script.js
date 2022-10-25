const buttons = document.getElementsByClassName('buttons')[0];
let input = document.getElementsByClassName('input')[0];
let operand1;
let operand2;

document
  .getElementsByClassName('toggle')[0]
  .addEventListener('click', function () {
    this.children[0].classList.toggle('stroke1');
    this.children[1].classList.toggle('stroke2');
    this.children[2].classList.toggle('stroke3');
  });

window.addEventListener('keydown', function (e) {
  console.log(e.key.toLowerCase());
  if (e.key.match(/\d/)) active(e.key, '#000000', '#494949');
  if (e.key == 'Backspace' || e.key == 'Delete')
    active(e.key, '#131313', '#494949');
  if (e.key == '=') active(e.key, '#134369', '#036fc4');
  switch (e.key) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      active(e.key, '#131313', '#494949');
  }
  numbers(e);
  deletes(e);
  operators(e);
  equals(e);
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
    switch (e.target.value || e.key) {
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
          input.innerHTML = '';
        }
        input.append(e.target.value || e.key);
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
  if (
    e.target.textContent == 'C' ||
    e.target.textContent == 'CE' ||
    e.key == 'Delete'
  ) {
    input.innerHTML = '0';
    input.previousElementSibling.innerHTML = '';
  } else if (e.target.textContent == 'DEL' || e.key == 'Backspace') {
    input.textContent == 'Infinity' || input.textContent == 'NaN'
      ? (input.innerHTML = '0')
      : '';

    const [...del] = input.textContent;
    del.pop();
    input.innerHTML = del.join('');
    input.textContent.length == 0 ? (input.innerHTML = '0') : '';
  }
}

function operators(e) {
  if (e.target.value == '+' || e.key == '+') {
    input.previousElementSibling.innerHTML = '+';
    operand1 = parseFloat(input.textContent);
    input.innerHTML = '0';
  } else if (e.target.value == '-' || e.key == '-') {
    input.previousElementSibling.innerHTML = '-';
    operand1 = parseFloat(input.textContent);
    input.innerHTML = '0';
  } else if (e.target.value == '*' || e.key == '*') {
    input.previousElementSibling.innerHTML = 'X';
    operand1 = parseFloat(input.textContent);
    input.innerHTML = '0';
  } else if (e.target.value == '/' || e.key == '/') {
    input.previousElementSibling.innerHTML = '/';
    operand1 = parseFloat(input.textContent);
    input.innerHTML = '0';
  } else if (e.target.value == 'squared') {
    input.innerHTML = Math.pow(input.textContent, 2);
  } else if (e.target.value == 'sqrt') {
    input.innerHTML = Math.sqrt(input.textContent);
  } else if (e.target.value == 'divide') {
    input.innerHTML = 1 / input.textContent;
  } else if (e.target.textContent == '%' || e.key == '%') {
    // operand2 = parseFloat(input.textContent);
    // input.innerHTML = operand1 % operand2;
    // input.previousElementSibling.innerHTML = '';
    input.innerHTML = input.textContent / 100;
  }
}

function equals(e) {
  if (e.target.value == '=' || e.key == '=') {
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

const active = (key, bg, bgAct) => {
  for (let el of Array.from(buttons.children)) {
    if (el.value == key.toLowerCase()) {
      el.style.backgroundColor = bgAct;

      wait(el, key, bg);
    }
  }
};

const wait = async (el, key, bg) => {
  await setTimeout(function () {
    if (el.value == key.toLowerCase()) el.style.backgroundColor = bg;
  }, 100);
};
