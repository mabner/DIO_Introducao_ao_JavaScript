var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;

function increment() {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
	changeTextColour();
}

function decrement() {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	changeTextColour();
}

function changeTextColour() {
	if (currentNumber < 0) {
		currentNumberWrapper.style.color = "red";
	} else {
		currentNumberWrapper.style.color = "black";
	}
}