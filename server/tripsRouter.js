'use strict';

const express = require('express');
const trips = require('./trips.json');

const router = express.Router();

const getTripEndpoints = ({ mapSceneId, poiSetId }) => ({
    mapScene: `/api/mapscenes/${mapSceneId}`,
    poiSet: `/api/pois/${poiSetId}`,
});

const tripNotFound = next => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
};

router.get('/', (req, res) => {
    res.render('default', {
        title: 'Trips',
        viewProps: {
            endpoints: {
                trips: '/api/trips',
            },
        },
    });
});

router.get('/:name', (req, res, next) => {
    const trip = trips[req.params.name];

    if (!trip) {
        tripNotFound(next);
        return;
    }

    res.render('trip', {
        title: trip.name,
        viewProps: {
            endpoints: getTripEndpoints(trip),
            trip,
        },
    });
});

module.exports = router;
