const jwt = require('jsonwebtoken'),
    ClaimsDto = require('./claims-dto'),
    {clearObj} = require('../../utils/utils');

const jwtSign = async ({secret = null, expiresTime = null, algorithm = null, claims = null}) => {
    try {
        if (secret != null && expiresTime !== null) {
            const payload = clearObj(new ClaimsDto(claims));
            const token = await jwt.sign({...payload}, secret, {algorithm: algorithm || 'HS256'}, {expiresIn: expiresTime});
            return token;
        } else {
            throw new Error('secret and expiresTime are required options');
        }

    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = jwtSign;