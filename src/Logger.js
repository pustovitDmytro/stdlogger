import { Console }  from 'console';
import defaults from './defaults';
import { isFunction } from './utils/common';
import Formatter from './Formatter';

function cloneConsoleConfig(obj) {
    return {
        ...obj,
        inspectOptions : { ...obj.inspectOptions }
    };
}

export default class Logger {
    constructor(config = {}) {
        this.levels = config.levels || defaults.levels;
        this.level = config.level || this.levels[0];
        this.native = config.native || defaults.native;
        this._console = this.native
            ? console
            : new Console(cloneConsoleConfig({
                ...defaults.console,
                ...config.console
            }));
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

                this._console[consoleLevel](...formatted);
            };
        });
    }

    _getConsoleLevel(level) {
        if (this.native) return isFunction(this._console[level]) ? level : 'log';

        return level === 'error' ? level : 'log';
    }

    log = (level, ...data) => {
        if (this.levels.includes(level)) {
            return this[level](...data);
        }

        const formatted = this.format([ level, ...data ]);

        this._console.log(...formatted);
    }
}
