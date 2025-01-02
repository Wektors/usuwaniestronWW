let password = prompt("Enter password: ");

function deleteOneWebsite() {
	let moreOptions = document.querySelector(".more-options");
	moreOptions.click();

	let websiteSettings = document.querySelectorAll(".no-gutters");

	websiteSettings[10].click(); // kolejność przyciski po "więcej opcji"

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
		}, "250"); // czas po wpisaniu hasla, przed naciśnięciem usuń
	}, "2000"); // czas po naciśnięciu "usuń stronę" przed załadowaniem popupu do wpisania hasla
}

deleteOneWebsite();

setInterval(deleteOneWebsite, 5000); // czas między wykonaniami całej operacji
