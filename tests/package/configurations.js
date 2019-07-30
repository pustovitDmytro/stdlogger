// import { assert } from 'chai';
import logger from '../entry';
import { verifyConsoleStdout } from '../utils';

suite('Configurations');

test('Default configuration', function () {
    verifyConsoleStdout(() => {
        logger.log({ object: true });
    }, '{ object: true }\n');
});
