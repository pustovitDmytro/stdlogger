// import { assert } from 'chai';
import logger from '../entry';
import { verifyConsoleStdout } from '../utils';

suite('Data');

test('Primitive data types', function () {
    [
        5,
        -1,
        0,
        '12',
        'quarter',
        null,
        undefined,
        true,
        false
    ].forEach(d => {
        verifyConsoleStdout(() => {
            logger.log(d);
        }, `${d}\n`);
    });
});

test('Objects', function () {
    verifyConsoleStdout(() => {
        logger.log({ a: 35 });
    }, '{ a: 35 }\n');
});

test('Arrays', function () {
    verifyConsoleStdout(() => {
        logger.log([ 1, 2, 3, 4, 5, 6, 7 ]);
    }, '[ 1, 2, 3, 4, 5, 6, 7 ]\n');
});

test('Symbols', function () {
    verifyConsoleStdout(() => {
        logger.log(Symbol('spread'));
    }, 'Symbol(spread)\n');
});

test('Sets', function () {
    verifyConsoleStdout(() => {
        logger.log(new Set([ 1, 2, 34, 5, 1 ]));
    }, 'Set { 1, 2, 34, 5 }\n');
});

test('Multiple arguments', function () {
    verifyConsoleStdout(() => {
        logger.log({ a: 35 }, [ 9, 2, 3, 4, 5 ]);
    }, '{ a: 35 } [ 9, 2, 3, 4, 5 ]\n');
});

