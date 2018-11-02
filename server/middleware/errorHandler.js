const errorHandler = (err, req, res, next) => {
	const errors = {
		h400: {
			httpStatus: 400,
			title: 'Required field',
			description: 'Missing input for required field',
			recoveryInstructions:
				'Please provide required information in your request and try again.'
		},
		h401: {
			httpStatus: 401,
			title: 'Unauthorized.',
			description: 'Credentials provided were invalid.',
			recoveryInstructions: 'Please enter valid credentials and try again.'
		},
		h403: {
			httpStatus: 403,
			title: 'Forbidden',
			description:
				'The user does not have the permission to access the request.',
			recoveryInstructions:
				'Please provide the correct ownership or permission.'
		},
		h404: {
			httpStatus: 404,
			title: 'Object not found',
			description: 'The server was unable to find the specified object.',
			recoveryInstructions:
				'Please ensure to specified an existing object and try again.'
		},
		h500: {
			httpStatus: 500,
			title: 'Database error.',
			description:
				'The server is having trouble communicating with the database',
			recoveryInstructions: 'Please contact server administration.'
		}
	};
	const error = errors[err[0]];
	res.status(error.httpStatus).json(error);
};

module.exports = errorHandler;
