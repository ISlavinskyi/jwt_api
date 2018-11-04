const express = require('express');

const routes = () => {
    const router = express.Router();

    router.route('sign')
        .post(async(req, res) => {
            try {

            } catch (e) {

            }
        });

    router.route('check')
        .post(async(req, res) => {
            try {

            } catch (e) {

            }
        });

    return router;
};

module.exports = routes;