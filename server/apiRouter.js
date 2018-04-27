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
    res.status(404).send();
});

router.get('/pois/:poiSetId', (req, res) => {
    res.status(404).send();
});

module.exports = router;
