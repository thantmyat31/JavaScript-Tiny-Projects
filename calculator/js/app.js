const NUMBERS = document.querySelectorAll('.number');
const OPERATORS = document.querySelectorAll('.operator-sign');
const INPUTDATA = document.getElementById('inputData');
const RESET = document.getElementById('reset');

let currentNumber = '';
let numberArray = [];
let sign = [];
let result = '';

RESET.addEventListener('click', () => {
	reset('all');
})

NUMBERS.forEach(number => {
	number.addEventListener('click', () => {
		const num = Number(number.getAttribute('data-value'));
		INPUTDATA.innerHTML += num;
		currentNumber += num;
	});
});


OPERATORS.forEach(operator => {
	operator.addEventListener('click', () => {
		const currentOperator = operator.getAttribute('data-sign');
		INPUTDATA.innerHTML += operator.textContent;
		sign.push(currentOperator) ;
		if(numberArray.length === 0 && result) {
			numberArray.push(result);
		} else {
			calculate();
		}
		

		console.log('[sign]',sign);
	});
});

const RESULTBUTTON = document.getElementById('result');
RESULTBUTTON.addEventListener('click', () => {
	calculate();
	reset();
	INPUTDATA.innerHTML = `${result}`;
})

const calculate = () => {
	if(numberArray.length === 0) {
		numberArray.push(Number(currentNumber));
		currentNumber = '';
	} else if(numberArray.length === 1) {
		numberArray.push(Number(currentNumber));
		currentNumber = '';
		result = eval(numberArray[0] + sign.shift() + numberArray[1]);
		numberArray = [result];

		console.log('[numberArray]',numberArray);
		console.log('[result]', result);
	}
}

const reset = (param) => {
	if(param) result = '';
	currentNumber = '';
	sign = [];
	numberArray = [];
	// inputData.innerHTML = '';
}