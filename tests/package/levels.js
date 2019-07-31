// import { assert } from 'chai';
import logger, { Logger } from '../entry';
import { verifyStdout, verifyStderr } from '../utils';

suite('Levels');

test('Default logger levels', function () {
    verifyStdout(() => {
        logger.log(1);
    }, '1\n');

    [ 'debug', 'verbose', 'info' ].forEach(level => {
        verifyStdout(() => {
            logger[level](`2-${level}`);
        }, `2-${level}\n`);
    });
});

test('filter levels', function () {
    const l = new Logger({ level: 'info' });

    verifyStdout(() => {
        l.debug(3);
    }, null);

    verifyStdout(() => {
        l.verbose(4);
    }, null);

    verifyStdout(() => {
        l.info(5);
    }, '5\n');
});

test('error level', function () {
    verifyStdout(() => {
        logger.error(6);
    }, null);

    verifyStderr(() => {
        logger.error(7);
    }, '7\n');
});

test('expanded level notation', function () {
    verifyStdout(() => {
        logger.log('debug', 'believed');
    }, 'believed\n');

    verifyStdout(() => {
        logger.log('debug', 'believed', [ 1, 2, 3 ]);
    }, 'believed [ 1, 2, 3 ]\n');
});
