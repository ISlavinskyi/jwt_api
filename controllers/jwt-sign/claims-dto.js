module.exports = class {
    constructor({issuer = null, subject = null, audience = null, notBefore = null}) {
        this.iss = issuer;
        this.sub = subject;
        this.aud = audience;
        this.nbf = notBefore;
    }
};