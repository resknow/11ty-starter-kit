module.exports = {
	contactForm: {
		name: 'Contact Form',
		action: 'https://f.postform.dev/FylcY78OmiFIX6mzW2LmSaHishPGqGme',
		method: 'post',
		className: ['flow'],
		fields: [
			{
				name: 'name',
				label: 'Your Name'
			},
			{
				name: 'phone',
				type: 'tel',
				label: 'Phone Number'
			},
			{
				name: 'email',
				type: 'email',
				label: 'Email Address'
			},
			{
				name: 'message',
				type: 'textarea',
				label: 'Message'
			},
			{
				name: 'submit',
				label: 'Send',
				className: ['btn']
			}
		]
	}
};
