import { Logger } from '../entry';
import { verifyStdout } from '../utils';

suite('Native');

test('log string by native logger', function () {
    const logger = new Logger({ format: 'simple', native: true });
    const expected = 'test';

    verifyStdout(() => {
        logger.log('test');
    },  `${expected}\n`);
});
