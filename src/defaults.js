const levels = [ 'debug', 'verbose', 'info', 'error' ];
const native = false;
const format = 'simple';
const inspect = {
    breakLength    : Number.POSITIVE_INFINITY,
    depth          : 4,
    maxArrayLength : 10,
    compact        : true,
    sorted         : false
};
const formatter = {};

const console = {
    colorMode      : false,
    inspectOptions : inspect
};

export default {
    levels,
    native,
    format,
    formatter,
    console
};

