'use strict';

const express = require('express');
const request = require('request');
const config = require('./config.json');
const trips = require('./trips.json');

const tripsList = Object.keys(trips).map(tripKey => ({ id: tripKey, name: trips[tripKey].name }));
const router = express.Router();

router.get('/trips', (req, res) => {
    res.json(tripsList);
});

router.get('/mapscenes/:id', (req, res) => {
    request.get(`https://wrld.mp/v1.1/mapscenes/${req.params.id}?token=${config.devToken}`)
        .pipe(res);
});

router.get('/pois/:poiSetId', (req, res) => {
    request.get(`https://poi.wrld3d.com/v1.1/poisets/${req.params.poiSetId}/pois/?token=${config.devToken}`)
        .pipe(res);
});

module.exports = router;
