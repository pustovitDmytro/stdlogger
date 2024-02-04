import { isFunction, isArray, isObject, isStream, isNumber, isValue } from 'myrmidon';

function isSet(x) {
    return isValue(x) && Object.prototype.toString.call(x) === '[object Set]';
}

export default function inspect(data, { root = true, cache = [] } = {}) {
    if (isStream(data)) return '[Stream]';
    if (isFunction(data)) return '[Function]';
    if (isArray(data)) {
        const lines = data.map(i => inspect(i, { cache, root: false }));

        return root ? lines.join(' ') : `[ ${lines.join(', ')} ]`;
    }

    if (isObject(data)) {
        if (~cache.indexOf(data)) {
            return '[Circular]';
        }

        cache.push(data);
        const lines = [];

        for (const [ key, value ] of Object.entries(data)) {
            const line = `${key}: ${inspect(value, { cache, root: false })}`;

            lines.push(line);
        }

        return `{ ${lines.join(', ')} }`;
    }

    if (isNumber(data)) return data;

    if (data === null) return 'null';
    if (data === undefined) return 'undefined';

    if (isSet(data)) {
        const lines = [ ...data ].map(i => inspect(i, { cache, root: false }));

        return  `Set { ${lines.join(', ')} }`;
    }

    return data.toString();
}
