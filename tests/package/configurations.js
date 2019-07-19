// import { assert } from 'chai';
import logger from '../entry';
import { verifyConsoleStdout } from '../utils';

suite('Configurations');

test('Default configuration', function () {
    verifyConsoleStdout(() => {
        logger.log({ object: true });
    }, '{ object: true }\n');
});

// test('Negative: missing target', function () {
//     const decorator = new Decorator();

//     assert.throws(() => {
//         decorator()('dM6u00XwhnJMFSc');
//     }, Error, "Can't decorate");
// });

// test('Negative: broken logger', function () {
//     const decorator = new Decorator({ logger: {} });
//     const decorated = decorator()(sum);

//     assert.throws(() => {
//         decorated(5, 9);
//     }, Error, 'logger not supports');
// });

// test('Positive: function logger', function () {
//     const catched = [];
//     const decorator = new Decorator({ level: 'several', logger: (type, data) => catched.push({ type, data }) });
//     const decorated = decorator()(sum);
//     const res = decorated(5, 9);

//     assert.equal(res, 14);
//     assert.equal(catched[0].type, 'several');
//     assert.deepOwnInclude(catched[0].data, {
//         method : 'sum',
//         params : '[ 5, 9 ]',
//         result : '14'
//     });
// });
