const {clearObj} = require('../../utils/utils')

module.exports = class {
    constructor({iss = null, sub = null, aud = null, aux = null}) {
        this.iss = iss;
        this.sub = sub;
        this.aud = aud;
        this.aux = clearObj(aux);
    }

};