import { isFunction } from 'myrmidon';
import defaults from './defaults';
import Formatter from './Formatter';

export default class Logger {
    constructor(config = {}) {
        this.levels = config.levels || defaults.levels;
        this.level = config.level || this.levels[0];
        this._console = config.console || console;

        this._init();
        const formatter = new Formatter({
            type : config.format,
            ...config.formatter
        });

        this.format = formatter.format;
    }

    _init() {
        const levelIndex = this.levels.indexOf(this.level);

        this.levels.forEach((level, index) => {
            if (index < levelIndex) return this[level] = () => {};

            const consoleLevel = this._getConsoleLevel(level);

            this[level] = (...data) => {
                const formatted = this.format(data);

                this._console[consoleLevel](formatted);
            };
        });
    }

    _getConsoleLevel(level) {
        return isFunction(this._console[level]) ? level : 'log';
    }

    log = (level, ...data) => {
        if (this.levels.includes(level)) {
            return this[level](...data);
        }

        const formatted = this.format([ level, ...data ]);

        this._console.log(formatted);
    }
}
