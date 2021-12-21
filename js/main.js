let form = document.getElementById('form')
const result = document.getElementById('result')

function OperationResult (e) {
    e.preventDefault()
    const a = +form.querySelector('[name="num1"]').value
    const b = +form.querySelector('[name="num2"]').value
    const action = form.querySelector('[name="math"]').value

    switch (action) {
        case '+':
            return result.innerHTML = Math.round(a + b)
        case '-':
            return result.innerHTML = Math.round(a - b)
        case '*':
            return result.innerHTML = Math.round(a * b)
        case '/':
            return result.innerHTML = Math.round(a / b)
    }
}

form.addEventListener('submit', OperationResult)