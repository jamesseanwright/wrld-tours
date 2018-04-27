'use strict';

const TripView = require('./views/TripView');
const TripsView = require('./views/TripsView');

const views = new Map([
    [/^\/trips\/?$/, TripsView],
    [/^\/trip/, TripView],
]);

const [, View] = [...views].find(([path]) => path.test(window.location.pathname));
const view = new View(window.APP.viewProps);
const renderTarget = document.body.querySelector('#render-target');

(async () => {
    await view.onNavigatedTo();

    if (renderTarget) {
        renderTarget.innerHTML = view.render();
    }
})();
