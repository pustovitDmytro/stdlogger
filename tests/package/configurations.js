// import { assert } from 'chai';
import logger from '../entry';
import { verifyStdout } from '../utils';

suite('Configurations');

test('Default configuration', function () {
    verifyStdout(() => {
        logger.log({ object: true });
    }, '{ object: true }\n');
});
