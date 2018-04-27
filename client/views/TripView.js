'use strict';

const wrld = require('wrld.js');
const callEndpoint = require('../callEndpoint');
const View = require('./View');

class TripView extends View {
    static addPointsToMap(map, points) {
        points.forEach(({ lat, lon, title, height_offset }) => {
            const popup = wrld.popup({
                elevation: height_offset,
                closeOnClick: false,
                closeButton: false,
            });

            popup.setLatLng([lat, lon])
                .setContent(title)
                .addTo(map);
        });
    }

    async onNavigatedTo() {
        const { endpoints } = this.props;

        const [mapScene, poiSet] = await Promise.all([
            callEndpoint(endpoints.mapScene),
            callEndpoint(endpoints.poiSet),
        ]);

        const map = wrld.map(document.querySelector('.map-container'), mapScene.api_key, mapScene);

        TripView.addPointsToMap(map, poiSet);
    }
}

module.exports = TripView;
