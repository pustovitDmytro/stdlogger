import defaults from './defaults';

function simpleFormatter(options, data) {
    return data;
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
            default:
                throw new Error(`Unrecognized formatter type${this.type}`);
        }
    }
}
