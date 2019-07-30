// import { assert } from 'chai';
import logger, { Logger } from '../entry';
import { verifyConsoleStdout, verifyConsoleStderr } from '../utils';

suite('Levels');

test('Default logger levels', function () {
    verifyConsoleStdout(() => {
        logger.log(1);
    }, '1\n');

    [ 'debug', 'verbose', 'info' ].forEach(level => {
        verifyConsoleStdout(() => {
            logger[level](`2-${level}`);
        }, `2-${level}\n`);
    });
});

test('filter levels', function () {
    const l = new Logger({ level: 'info' });

    verifyConsoleStdout(() => {
        l.debug(3);
    }, null);

    verifyConsoleStdout(() => {
        l.verbose(4);
    }, null);

    verifyConsoleStdout(() => {
        l.info(5);
    }, '5\n');
});

test('error level', function () {
    verifyConsoleStdout(() => {
        logger.error(6);
    }, null);

    verifyConsoleStderr(() => {
        logger.error(7);
    }, '7\n');
});

test('expanded level notation', function () {
    verifyConsoleStdout(() => {
        logger.log('debug', 'believed');
    }, 'believed\n');

    verifyConsoleStdout(() => {
        logger.log('debug', 'believed', [ 1, 2, 3 ]);
    }, 'believed [ 1, 2, 3 ]\n');
});
