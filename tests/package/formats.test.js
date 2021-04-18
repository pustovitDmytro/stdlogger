// import { assert } from 'chai';
import { assert } from 'chai';
import { Logger } from '../entry';
import { verifyStdout } from '../utils';

suite('Formats');

const testObj = {
    a   : { b: { t: 5 } },
    arr : [ 1, 2, 3, { r: 'f' } ]
};

test('simple formatter', function () {
    const logger = new Logger({ format: 'simple' });
    const expected = '{ a: { b: { t: 5 } }, arr: [ 1, 2, 3, { r: \'f\' } ] }';

    verifyStdout(() => {
        logger.log(testObj);
    },  `${expected}\n`);
});

test('simple formatter: multiple arguments', function () {
    const logger = new Logger({ format: 'simple' });
    const expected = '{ a: { b: { t: 5 } }, arr: [ 1, 2, 3, { r: \'f\' } ] } { second: true }';

    verifyStdout(() => {
        logger.log(testObj, { second: true });
    },  `${expected}\n`);
});


test('json formatter', function () {
    const logger = new Logger({ format: 'json' });
    const expected = '{"a":{"b":{"t":5}},"arr":[1,2,3,{"r":"f"}]}';

    verifyStdout(() => {
        logger.log(testObj);
    }, `${expected}\n`);
});

test('json formatter: multiple arguments', function () {
    const logger = new Logger({ format: 'json' });
    const expected = '[{"a":{"b":{"t":5}},"arr":[1,2,3,{"r":"f"}]},{"second":true}]';

    verifyStdout(() => {
        logger.log(testObj, { second: true });
    }, `${expected}\n`);
});


test('unknown formatter', function () {
    try {
        const logger = new Logger({ format: 'csv' });

        assert.fail('expected to fail', logger);
    } catch (error) {
        assert.match(error, /unrecognized formatter/i);
    }
});
