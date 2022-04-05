// Price list
const annualPrices = ['199.99', '249.99', '399.99'];
const monthlyPrices = ['19.99', '24.99', '39.99'];

// UI variable
const checkBox = document.querySelector("input[type='checkbox']");
const prices = document.querySelectorAll('.price');

// https://blog.akansh.com/how-to-add-text-change-transition/
checkBox.addEventListener('click', () => {
	prices.forEach((price, index) => {
		price.classList.remove('fade');
		if (checkBox.checked) {
			changeText(price, index, annualPrices);
		} else {
			changeText(price, index, monthlyPrices);
		}
	});
});

function changeText(price, index, array) {
	setTimeout(() => {
		requestAnimationFrame(() => {
			price.textContent = array[index];
			price.classList.add('fade');
		});
	}, 225);
}
