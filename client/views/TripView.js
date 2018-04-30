'use strict';

const wrld = require('wrld.js');
const callEndpoint = require('../callEndpoint');
const View = require('./View');

class TripView extends View {
    static addPointsToMap(map, points) {

    }

    async onNavigatedTo() {
        const { endpoints } = this.props;

        const [mapScene, poiSet] = await Promise.all([
            callEndpoint(endpoints.mapScene),
            callEndpoint(endpoints.poiSet),
        ]);

        TripView.addPointsToMap(map, poiSet);
    }
}

module.exports = TripView;
