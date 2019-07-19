import defaults from './defaults';

export default class Logger {
    constructor(config = {}) {
        this.levels = config.levels || defaults.levels;
        this.level = config.level || this.levels[0];
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
        if (this.native) return console[level] ? level : 'log';

        return level === 'error' ? level : 'log';
    }

    log = (level, ...data) => {
        if (this.levels.includes(level)) {
            return this[level](...data);
        }
        console.log(level, ...data);
    }
}
