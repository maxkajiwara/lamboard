const jwt = require('jsonwebtoken');

// Temporary!! This is just here for testing
const jwtSecret = "I'm a secret! Shhh!";

module.exports = {
	generateToken,
	restricted
};

function generateToken(user) {
	const jwtPayload = { user: user.id };
	const jwtOptions = {
		expiresIn: '5m' // 5 minutes for testing purposes
	};

	return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
}

function restricted(req, res, next) {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, jwtSecret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid token' });
			} else {
				req.decodedToken = decodedToken;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'No token provided' });
	}
}

// AUTH0
// const jwt = require('express-jwt');
// const jwtAuthz = require('express-jwt-authz');
// const jwksRsa = require('jwks-rsa');

// module.exports = {
// 	restricted
// };

// const restricted = jwt({
// 	secret: jwksRsa.expressJwtSecret({
// 		cache: true,
// 		rateLimit: true,
// 		jwksRequestsPerMinute: 5,
// 		jwksUri: `https://YOUR_AUTH0_DOMAIN/.well-known/jwks.json`
// 	}),

// 	audience: 'YOUR_API_IDENTIFIER',
// 	issuer: `https://YOUR_AUTH0_DOMAIN/`,
// 	algorithms: ['RS256']
// });
