'use strict';

const callEndpoint = require('../callEndpoint');
const TripItemView = require('./TripItemView');
const View = require('./View');

class TripsView extends View {
    constructor(props) {
        super(props);
    }

    async onNavigatedTo() {
        const { endpoints } = this.props;
        this.trips = await callEndpoint(endpoints.trips);
    }

    render() {
        return `
            <ul class="trips-list">
                ${this.trips.map(trip => new TripItemView(trip).render())}
            </ul>
        `;
    }
}

module.exports = TripsView;
