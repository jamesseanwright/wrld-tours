'use strict';

const callEndpoint = async endpoint => {
    const response = await window.fetch(endpoint);
    return await response.json();
};

module.exports = callEndpoint;
