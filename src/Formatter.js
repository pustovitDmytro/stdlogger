import defaults from './defaults';

function simpleFormatter(options, data) {
    return data;
}

function jsonFormatter(options, data) {
    return [
        data.length > 1
            ? JSON.stringify(data)
            : JSON.stringify(data[0])
    ];
}

export default class Formatter {
    constructor(config = {}) {
        const { type, ...options } = config;

        this.type = type || defaults.format;
        this._init(options);
    }

    _init = (options) => {
        switch (this.type) {
            case 'simple':
                return this.format = simpleFormatter.bind(this, options);
            case 'json':
                return this.format = jsonFormatter.bind(this, options);
            default:
                throw new Error(`Unrecognized formatter type: ${this.type}`);
        }
    }
}
