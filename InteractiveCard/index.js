window.onload = function () {
	let inputtedName = "";
	let inputtedNumber = "";
	let inputtedMonth = "";
	let inputtedYear = "";
	let inputtedCvc = "";

	const cardHolderName = document.getElementById("cardholder-name");
	const cardNumber = document.getElementById("card-number");
	const month = document.getElementById("month");
	const year = document.getElementById("year");
	const cvc = document.getElementById("cvc");
	const form = document.querySelector("form");
	const submitBtn = document.querySelector(".btn-confirm");
	const continueBtn = document.querySelector(".continue");
	const success = document.querySelector(".sucess");

	const nameError = document.querySelector(".name");
	const numberError = document.querySelector(".number");
	const monthError = document.querySelector(".month");
	const yearError = document.querySelector(".year");
	const cvcError = document.querySelector(".cvc");

	const cardNameText = document.querySelector(".card-text-name");
	const cardText1 = document.querySelector(".num1");
	const cardText2 = document.querySelector(".num2");
	const cardText3 = document.querySelector(".num3");
	const cardText4 = document.querySelector(".num4");
	const monthYearText = document.querySelector(".monthYear-text");
	const cvcText = document.querySelector(".cvc-text");

	function updateCardDisplay(event, type,cardText) {
		const text = event.target.value.trim();
		switch (type) {
			case "card-name":
				cardNameText.textContent = text.toUpperCase();
				inputtedName = cardNameText.textContent;
				break;

			case "card-number":
				const textList = cardText.toString().split(" ");
				if (textList.length === 4) editCardNum(textList[3], cardText4);
				else if (textList.length === 3) editCardNum(textList[2], cardText3);
				else if (textList.length === 2) editCardNum(textList[1], cardText2);
				else editCardNum(textList[0], cardText1);
				inputtedNumber = textList.join("");
				break;

			case "month":
				let monthText = monthYearText.textContent.split("/");
				if (Number(text) < 10 && text.length === 1) monthText[0] = "0" + text;
				else monthText[0] = text;
				monthYearText.textContent = monthText.join("/");
				inputtedMonth = monthText[0];
				break;

			case "year":
				let yearText = monthYearText.textContent.split("/");
				yearText[1] = text;
				monthYearText.textContent = yearText.join("/");
				inputtedYear = yearText[1];
				break;

			case "cvc":
				cvcText.textContent = text;
				inputtedCvc = text;
				break;

			default:
		}
	}

	function editCardNum(text, element) {
      if(text.length == 0) text="0000";
		else if (text.length === 3) text += "0";
		else if (text.length === 2) text += "00";
		else if (text.length === 1) text += "000";
		element.textContent = text;
	}

	function showError(element, input, text) {
		element.textContent = text;
		element.classList.add("show");
		input.classList.add("input-error");
	}

	function removeError(element, input) {
		if (element.classList.contains("show")) {
			element.classList.remove("show");
			input.classList.remove("input-error");
		}
	}

	function submit(event) {
		event.preventDefault();

		function blank(element, input) {
			showError(element, input, "can't be blank");
			successful.push(false);
		}

		const successful = [true];

		if (inputtedName) {
		} else {
			blank(nameError, cardHolderName);
		}

		if (inputtedNumber) {
			if (Number(inputtedNumber)) {
				if (inputtedNumber.length !== 16) {
					console.log(inputtedNumber.length);
					showError(numberError, cardNumber, "Invalid number");
					successful.push(false);
				}
			} else {
				showError(numberError, cardNumber, "Wrong format, numbers only");
				successful.push(false);
			}
		} else {
			blank(numberError, cardNumber);
		}

		if (inputtedMonth) {
			const textToNum = Number(inputtedMonth);
			if (textToNum > 12 || textToNum < 1) {
				showError(monthError, month, "Enter a valid month");
				successful.push(false);
			}
		} else {
			blank(monthError, month);
			successful.push(false);
		}

		if (inputtedCvc) {
			if (inputtedCvc.length < 2 || inputtedCvc.length > 3) {
				successful.push(false);
				showError(cvcError, cvc, "Enter a valid cvc number");
			}
		} else {
			blank(cvcError, cvc);
			successful.push(false);
		}

		if (inputtedYear) {
			const num = Number(year);
			if (num > 9999 || num < 1000) {
				successful.push(false);
				showError(yearError, year, "Enter a valid year");
			}
		} else {
			blank(yearError, year);
			successful.push(false);
		}

		if (successful.length === 1) {
			form.classList.add("hide");
			success.classList.remove("hide");
			inputtedCvc = "";
			inputtedMonth = "";
			inputtedName = "";
			inputtedYear = "";
			inputtedNumber = "";

			cvc.value = inputtedCvc;
			month.value = inputtedMonth;
			year.value = inputtedYear;
			cardHolderName.value = inputtedName;
			cardNumber.value = inputtedNumber;
		}
	}

	function added() {
		success.classList.add("hide");
		cvcText.textContent = "000";
		monthYearText.textContent = "00/00";
		cardNameText.textContent = "jane appleseed";
		cardText1.textContent = "0000";
		cardText2.textContent = "0000";
		cardText3.textContent = "0000";
		cardText4.textContent = "0000";
		form.classList.remove("hide");
	}

	cardHolderName.addEventListener("input", (event) => {
		updateCardDisplay(event, "card-name");
	});

   let previousText = "";
	cardNumber.addEventListener("input", (event) => {
		let text = event.target.value.toString().trim();

      if (text.length> previousText.length){
         if (text.replaceAll(" ", "").length % 4 === 0) {
            if (text.replaceAll(" ", "").length === 16) {
               event.target.value = text;
               previousText = text;
            }
            else {
               event.target.value = text + " ";
               previousText = text+" ";
            };
         }
      }
      else {
         previousText = text;
         event.target.value = text;
         if (text.replaceAll(" ", "").length % 4 === 0 && text.replaceAll(" ", "").length != 16 &&text.replaceAll(" ", "").length >3){
            text +=" "
         }
      }

		updateCardDisplay(event, "card-number", text);
	});

	month.addEventListener("input", (event) => {
		updateCardDisplay(event, "month");
	});

	year.addEventListener("input", (event) => {
		updateCardDisplay(event, "year");
	});

	cvc.addEventListener("input", (event) => {
		updateCardDisplay(event, "cvc");
	});

	submitBtn.addEventListener("click", (event) => {
		submit(event);
	});
	continueBtn.addEventListener("click", added);

	cardHolderName.addEventListener("focus", () => {
		removeError(nameError, cardHolderName);
	});

	cardNumber.addEventListener("focus", () => {
		removeError(numberError, cardNumber);
	});

	month.addEventListener("focus", () => {
		removeError(monthError, month);
	});

	cvc.addEventListener("focus", () => {
		removeError(cvcError, cvc);
	});
	year.addEventListener("focus", () => {
		removeError(yearError, year);
	});
};
