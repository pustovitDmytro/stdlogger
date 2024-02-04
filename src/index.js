import L from './Logger';
import defaults from './defaults';

export const Logger = L;

export default new Logger();

export function consoleConfig(obj) {
    const merged = {
        ...defaults.console,
        ...obj
    };

    return {
        ...merged,
        inspectOptions : { ...merged.inspectOptions }
    };
}
