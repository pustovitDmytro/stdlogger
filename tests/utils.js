import { assert } from 'chai';
import { stdout, stderr } from 'test-console';

export function verifyConsoleStderr(functionUnderTest, expected, opts = { }) {
    verifyConsoleStdout(functionUnderTest, expected, { ...opts, stderr: true });
}

export function verifyConsoleStdout(functionUnderTest, expected, opts = { }) {
    const inspect = opts.stderr ? stderr.inspect() : stdout.inspect();

    functionUnderTest();
    inspect.restore();
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
