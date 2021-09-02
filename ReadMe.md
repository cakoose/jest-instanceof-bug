# Jest instanceof bug

Setup: Clone this repo, `cd` into it, then:

```
yarn install
yarn run tsc --build
```

Running under `node`, `instanceof` checks succeed:

```
$ node dist/normal.js
instanceof1 true
instanceof2 true
```

Running under `jest`, `instanceof` checks yield `false`:

```
$ yarn run jest dist/test.js
yarn run v1.22.10
$ REDACTED/jest-instanceof-bug/node_modules/.bin/jest dist/test.js
 PASS  dist/test.js
  ✓ blah (15 ms)

  console.log
    instanceof1 false

      at Object.<anonymous> (dist/test.js:11:17)

  console.log
    instanceof2 false

      at Object.<anonymous> (dist/test.js:12:17)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.251 s, estimated 1 s
Ran all test suites matching /dist\/test.js/i.
✨  Done in 0.93s.
```
