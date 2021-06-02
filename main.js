const itemNum = document.querySelectorAll('.item');

function insert(num) {
  document.form.calculator_display.value += num;
}

itemNum.forEach(function (element) {
  element.addEventListener('click', function () {
    if (this.classList.contains('digit')) {
      insert(this.innerHTML);
    } else if (this.classList.contains('multiply')) {
      insert('*');
    } else if (this.classList.contains('share')) {
      insert('/');
    }

    if (this.classList.contains('clear')) {
      clear();
    } else if (this.classList.contains('back')) {
      back();
    } else if (this.classList.contains('equally')) {
      equal();
    }
  });
});

function clear() {
  document.form.calculator_display.value = '';
};

function back() {
  const valueInput = document.form.calculator_display.value;
  document.form.calculator_display.value = valueInput.substring(
    0,
    valueInput.length - 1
  );
};

function equal() {
  const valueInput = document.form.calculator_display.value;
  if (valueInput) {
    document.form.calculator_display.value = eval(valueInput).toFixed(1);
  };
};
