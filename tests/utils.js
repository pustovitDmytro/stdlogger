import { assert } from 'chai';
import { stdout, stderr } from 'test-console';

export function verifyStderr(functionUnderTest, expected, opts = { }) {
    verifyStdout(functionUnderTest, expected, { ...opts, stderr: true });
}

export function verifyStdout(functionUnderTest, expected, opts = { }) {
    const inspect = opts.stderr ? stderr.inspect() : stdout.inspect();

    try {
        functionUnderTest();
    } finally {
        inspect.restore();
    }

    const [ output ] = inspect.output;

    if (!expected) {
        return assert.notExists(output);
    }

    if (opts.json) {
        const { level, ...message } = JSON.parse(output); // eslint-disable-line no-unused-vars

        return assert.deepEqual(message, expected);
    }

    if (opts.regexp) {
        return expected.forEach(reg => assert.match(output, reg));
    }

    assert.equal(output, expected);
}
