const jwt = require('jsonwebtoken');

const jwtVerify = async ({token = null, secret = null, claims = null}) => {
    try {
        if (token !== null && secret != null) {
            const verify = await jwt.verify(token, secret, {...claims});
            return {isValid: true};
        } else {
            throw new Error('secret and token are required options');
        }

    } catch (e) {
        return {isValid:false, reason: e.message}
    }
};

module.exports = jwtVerify;