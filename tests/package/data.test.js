// import { assert } from 'chai';
import logger from '../entry';
import { verifyStdout } from '../utils';

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
        verifyStdout(() => {
            logger.log(d);
        }, `${d}\n`);
    });
});

test('Objects', function () {
    verifyStdout(() => {
        logger.log({ a: 35 });
    }, '{ a: 35 }\n');
});

test('Arrays', function () {
    verifyStdout(() => {
        logger.log([ 1, 2, 3, 4, 5, 6, 7 ]);
    }, '[ 1, 2, 3, 4, 5, 6, 7 ]\n');
});

test('Symbols', function () {
    verifyStdout(() => {
        logger.log(Symbol('spread'));
    }, 'Symbol(spread)\n');
});

test('Sets', function () {
    verifyStdout(() => {
        logger.log(new Set([ 1, 2, 34, 5, 1 ]));
    }, [ /Set.* { 1, 2, 34, 5 }\n/ ], { regexp: true });
});

test('Multiple arguments', function () {
    verifyStdout(() => {
        logger.log({ a: 35 }, [ 9, 2, 3, 4, 5 ]);
    }, '{ a: 35 } [ 9, 2, 3, 4, 5 ]\n');
});

