const jwt = require('jsonwebtoken');

const jwtDecode = async ({token = null}) => {
    try {
        if(token !== null) {
            const decode = await jwt.decode(token);
            if(decode !== null) {
                return decode;
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