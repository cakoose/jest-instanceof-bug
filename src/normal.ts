import * as util from 'util';

async function mainAsync(): Promise<void> {
    const decoder = new util.TextDecoder('utf8', {fatal: true, ignoreBOM: false})
    try {
        console.log('decoded', decoder.decode(Buffer.from([0xe2, 0x28, 0xa1])));
    } catch (err) {
        console.log('instanceof1', err instanceof TypeError);
        console.log('instanceof2', err instanceof Error);
    }
}

if (require.main === module) {
    mainAsync().catch(err => {
        console.error(err);
        process.exit(1);
    });
}

