const jwt = require('jsonwebtoken'),
    ClaimsDto = require('./claims-dto'),
    ResponseDto = require('./response-dto'),
    {clearObj} = require('../../utils/utils');

const jwtSign = async ({secret = null, expiresIn = null, alg = null, claims = null}) => {
    try {
        if (secret != null && expiresIn !== null) {
            const payload = clearObj(new ClaimsDto(claims));
            const token = await jwt.sign({...payload}, secret, {algorithm: alg || 'HS256'}, {expiresIn: expiresIn});
            return new ResponseDto(token, expiresIn);
        } else {
            throw new Error('secret and expiresTime are required options');
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = jwtSign;