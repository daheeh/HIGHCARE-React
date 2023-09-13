

class CustomError extends Error {
	constructor(code, message) {
		super(message);
		this.name = 'CustomError';
		this.errorCode = code;
	}
}

module.exports = CustomError;
