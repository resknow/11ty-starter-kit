document.addEventListener('DOMContentLoaded', () => {
	let emailAddressElements = document.querySelectorAll('.email-address');
	if (emailAddressElements) {
		emailAddressElements.forEach((item) => {
			item.addEventListener('copy', (event) => {
				let unreversedEmail = document.getSelection().baseNode.data.split('').reverse().join('');
				event.clipboardData.setData('text/plain', unreversedEmail);
				event.preventDefault();
			});
		});
	}
});
