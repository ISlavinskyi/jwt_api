const express = require('express'),
    {jwtSign, jwtVerify} = require('../controllers/index');

const routes = () => {
    const router = express.Router();

    router.route('/sign')
        .post(async(req, res) => {
            try {
                const token = await jwtSign(req.body);
                res.status(200).send(token);
            } catch (e) {
                res.status(500).json({error: e.message});
            }
        });

    router.route('/verify')
        .post(async(req, res) => {
            try {
                const status = await jwtVerify(req.body);
                res.status(200).send(status);
            } catch (e) {
                res.status(401).json({error: e.message});
            }
        });

    return router;
};

module.exports = routes;