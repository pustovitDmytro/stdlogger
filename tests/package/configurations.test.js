import { assert } from 'chai';
import entry from '../entry';
import { verifyStdout } from '../utils';

suite('Configurations');

test('Default configuration', function () {
    assert.exists(entry);
});

test('Default log', function () {
    verifyStdout(() => {
        entry.log({ object: true });
    }, '{ object: true }\n');
});
