class Calculator {
    constructor(previousOperandTextElement, currentOPerandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOPerandTextElement = currentOPerandTextElement
    }

    clear() {
this.currentOPerand =
    }

    delete() {

    }

    appendNumber() {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-op]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')