import * as util from 'util';
import {test} from '@jest/globals';

test('blah', async () => {
    const decoder = new util.TextDecoder('utf8', {fatal: true, ignoreBOM: false})
    try {
        console.log('decoded', decoder.decode(Buffer.from([0xe2, 0x28, 0xa1])));
    } catch (err) {
        console.log('instanceof1', err instanceof TypeError);
        console.log('instanceof2', err instanceof Error);
    }
});
