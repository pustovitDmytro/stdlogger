// import { assert } from 'chai';
import logger from '../entry';
import { verifyConsoleStdout } from '../utils';

suite('Levels');

test('Multiple arguments', function () {
    verifyConsoleStdout(() => {
        logger.log({ a: 35 }, [ 9, 2, 3, 4, 5 ]);
    }, '{ a: 35 } [ 9, 2, 3, 4, 5 ]\n');
});

