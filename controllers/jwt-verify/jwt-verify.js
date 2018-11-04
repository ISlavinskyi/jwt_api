const jwt = require('jsonwebtoken');

const jwtVerify = async ({token}) => {
    try {
        const decode = await jwt.verify(token,'secret');
        return decode;
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = jwtVerify;