"use strict";

function* createIdGenerator() {
    while (true) {
        yield 1
    }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);