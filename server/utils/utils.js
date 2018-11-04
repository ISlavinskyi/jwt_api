module.exports = {
    clearObj(obj) {
        Object.keys(obj).forEach(key => {
            if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
                delete obj[key]
            }
        });
        return obj
    }
};