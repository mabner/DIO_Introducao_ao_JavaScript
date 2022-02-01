var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;
var plusButton = document.getElementById("increment");
var minusButton = document.getElementById("decrement");

function increment() {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
	changeTextColour();
	disableButtons();
}

function decrement() {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	changeTextColour();
	disableButtons();
}

function changeTextColour() {
	if (currentNumber < 0) {
		currentNumberWrapper.style.color = "red";
	} else {
		currentNumberWrapper.style.color = "black";
	}
}

function disableButtons() {
	if (currentNumber == -10) {
		document.getElementById("decrement").disabled = true;
	} else if (currentNumber == 10) {
		document.getElementById("increment").disabled = true;
	} else {
		document.getElementById("decrement").disabled = false;
		document.getElementById("increment").disabled = false;
	}
}

plusButton.addEventListener("click", increment);

minusButton.addEventListener("click", decrement);