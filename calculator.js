export default class Calculator {
  constructor(...expression) {
    console.log(expression);
    /* Now we will separate operators
    from numbers */
    this.numbers = [];
    this.operators = [];

    expression.forEach(item => {
      if (/\d+/g.test(item)) {
        this.numbers.push(item);
      } else {
        this.operators.push(item);
      }
    });
    console.log(this.numbers);
    console.log(this.operators);
    return this.result();
  }

  result() {
    let index;
    while (this.operators.includes('*') || this.operators.includes('/')) {
      for (let i = 0; i < this.operators.length; i++) {
        switch (this.operators[i]) {
          case '*':
            index = this.operators.indexOf('*');
            this.numbers
              .splice(index, 2, this.multiply(this.numbers[index], this.numbers[index + 1]));
            this.operators
              .splice(index, 1);
            break;
          case '/':
            index = this.operators.indexOf('/');
            this.numbers
              .splice(index, 2, this.divide(this.numbers[index], this.numbers[index + 1]));
            this.operators
              .splice(index, 1);
            break;
        }
      }
    }
    for (let i = 0; i < this.operators.length; i++) {
      switch (this.operators[i]) {
        case '+':
          index = this.operators.indexOf('+');
          this.numbers
            .splice(index, 2, this.add(this.numbers[index], this.numbers[index + 1]));
          this.operators
            .splice(index, 1);
          break;
        case '-':
          index = this.operators.indexOf('-');
          this.numbers
            .splice(index, 2, this.subtract(this.numbers[index], this.numbers[index + 1]));
          this.operators
            .splice(index, 1);
          break;
      }
    }
    return this.numbers[0];
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}