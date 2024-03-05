"use script";

const inputs = document.querySelectorAll(".form-input");
const days = inputs[0];
const months = inputs[1];
const years = inputs[2];
const currentDate = new Date();
const [currentYear, currentMonth, currentDay] = [
	Number(currentDate.getFullYear()),
	Number(currentDate.getMonth()) + 1,
	Number(currentDate.getDate()),
];
const dayHtml = document.querySelector(".day-text");
const monthHtml = document.querySelector(".month-text");
const yearHtml = document.querySelector(".year-text");

window.onload = main;

function main() {
	focus();

	const form = document.getElementById("form");
	form.addEventListener("submit", processData);
}

function processData(event) {
	event.preventDefault();
	const day = +event.target[0].value;
	const month = +event.target[1].value;
	const year = +event.target[2].value;
	setError(day, month, year, currentYear, currentMonth, currentDay);
}

function setError(day, month, year, currentYear, currentMonth, currentDay) {
	if (day == 0 || month == 0 || year == 0) {
		if (day == 0) {
			processErrors(days, "This field is required");
		}
		if (month == 0) {
			processErrors(months, "This field is required");
		}
		if (year == 0) {
			processErrors(years, "This field is required");
		}
	} else if (year > currentYear || day > 31 || month > 12) {
		if (year > currentYear) processErrors(years, "Must be in the past");
		if (day > 31) processErrors(days, "Must be a valid date");
		if (month > 12) processErrors(months, "Must be a valid month");
	} else if (
		((month == 9 || month == 4 || month == 6 || month == 11) && day > 30) ||
		(month == 2 && day > 29)
	) {
		processErrors(days, "Must be a valid date");
	} else if (
		currentYear == year &&
		(day > currentDay || month > currentMonth)
	) {
		if (month > currentMonth) processErrors(months, "Must be in the past");
		if (day > currentDay) processErrors(days, "Must be in the past");
	} else {
		let calcDay = currentDay - day;
		let calcMonth = currentMonth - month;
		let calcYear = currentYear - year;

		if (calcDay < 0) {
			const lastMonthDays = new Date(currentYear, currentMonth, 0).getDate();
			calcDay += lastMonthDays;
			calcMonth--;
		}
		if (calcMonth < 0) {
			calcMonth += 12;
			calcYear--;
		}

		animateNumber(dayHtml, calcDay);
		animateNumber(monthHtml, calcMonth);
		animateNumber(yearHtml, calcYear);
	}
}

function focus() {
	days.querySelector("input").addEventListener("focus", removeErrors);
	months.querySelector("input").addEventListener("focus", removeErrors);
	years.querySelector("input").addEventListener("focus", removeErrors);
}

function processErrors(component, errorText) {
	component.querySelector("label").classList.add("text-error");
	component.querySelector("label").classList.remove("text-smokeGray");
	component.querySelector("input").classList.add("border-error");
	component.querySelector("input").classList.remove("border-lightGray");
	component.querySelector("p").classList.remove("hidden");
	component.querySelector("p").innerText = errorText;
}

function removeErrors() {
	inputs.forEach((element) => {
		element.querySelector("label").classList.remove("text-error");
		element.querySelector("label").classList.add("text-smokeGray");
		element.querySelector("input").classList.remove("border-error");
		element.querySelector("input").classList.add("border-lightGray");
		element.querySelector("p").classList.add("hidden");
	});
}

function animateNumber(component, number) {
	let counter = 0;
	const animate = setInterval(() => {
		component.innerText = counter;
		if (counter == number) clearInterval(animate);
		counter++;
	}, 100);
}
