const jwt = require('jsonwebtoken');

const jwtDecode = async ({token = null}) => {
    try {
        if(token !== null) {
            const base64 = token.split('.')[0];
            const algorithm = JSON.parse(Buffer.from(base64, 'base64').toString());
            const decode = await jwt.decode(token);
            if(decode !== null) {
                return ({ decode, algorithm});
            } else {
                throw new Error('wrong token');
            }
        } else  {
            throw new Error('token is required option');
        }
    } catch (e) {
        throw new Error(e.message);
    }
};

module.exports = jwtDecode;