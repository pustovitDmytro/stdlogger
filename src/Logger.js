import defaults from './defaults';
import { isFunction } from './utils/common';

export default class Logger {
    constructor(config = {}) {
        this.levels = config.levels || defaults.levels;
        this.level = config.level || this.levels[0];
        this.native = config.native || defaults.native;
        this._init();
    }
    
    _init(){
        const levelIndex = this.levels.indexOf(this.level);
        this.levels.forEach((level, index) => {
            if (index < levelIndex) return this[level] = () => {};
            const consoleLevel = this._getConsoleLevel(level);

            this[level] = (...data) => {
                console[consoleLevel](...data);
            };
        });
    }

    _getConsoleLevel(level) {
        if (this.native) return isFunction(console[level]) ? level : 'log';

        return level === 'error' ? level : 'log';
    }

    log = (level, ...data) => {
        if (this.levels.includes(level)) {
            return this[level](...data);
        }
        console.log(level, ...data);
    }
}
