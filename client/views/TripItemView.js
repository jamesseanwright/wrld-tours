'use strict';

const View = require('./View');

class TripItemView extends View {
    render() {
        const { id, name } = this.props;

        return `
            <li>
                <a href=trips/${id}>${name}</a>
            </li>
        `;
    }
}

module.exports = TripItemView;
