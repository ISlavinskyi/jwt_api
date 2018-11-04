const {clearObj} = require('../../utils/utils')

module.exports = class {
    constructor({issuer = null, subject = null, audience = null, auxiliary = null}) {
        this.iss = issuer;
        this.sub = subject;
        this.aud = audience;
        this.aux = clearObj(auxiliary);
    }

};