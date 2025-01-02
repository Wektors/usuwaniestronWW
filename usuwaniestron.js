let password = prompt("Enter password: ");

function deleteOneWebsite() {
	let moreOptions = document.querySelector(".more-options");
	moreOptions.click();

	let websiteSettings = document.querySelectorAll(".no-gutters");

	websiteSettings[10].click();

	setTimeout(() => {
		let parentField = document.querySelector(".contextBoxPropertyWrapper");

		let inputField = parentField.querySelector(
			".input__field.input--with-right-icon__field"
		);

		console.log(inputField);

		inputField.click();

		inputField.value = password;

		let event = new Event("change");
		inputField.dispatchEvent(event);

		setTimeout(() => {
			let deleteSite = document.querySelector(".ml-4");

			console.log(deleteSite);

			deleteSite.click();
		}, "250");
	}, "2000");
}

deleteOneWebsite();

setInterval(deleteOneWebsite, 5000);
