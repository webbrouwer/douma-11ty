var validate = new Bouncer('#form', {

	// Classes & IDs
	fieldClass: 'error', // Applied to fields with errors
	errorClass: 'error-message', // Applied to the error message for invalid fields
	fieldPrefix: 'bouncer-field_', // If a field doesn't have a name or ID, one is generated with this prefix
	errorPrefix: 'bouncer-error_', // Prefix used for error message IDs

	// Patterns
	// Validation patterns for specific input types
	patterns: {
		email: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/
	},

	// Message Settings
	messageAfterField: true, // If true, displays error message below field. If false, displays it above.

	// Error messages by error type
	messages: {
		missingValue: {
			name: 'Vul uw naam in.',
			email: 'Vul uw e-mailadres in.',
			select: 'Maak een keuze',
			default: 'Dit is een verplicht veld.'
		},
		patternMismatch: {
			email: 'Vul een geldig e-mailadres in.'
		}
	},

	// Form Submission
	disableSubmit: false, // If true, native form submission is suppressed even when form validates

	// Custom Events
	emitEvents: true // If true, emits custom events

});
