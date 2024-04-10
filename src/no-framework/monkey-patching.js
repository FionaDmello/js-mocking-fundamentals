// this is an assertion library from node - hover over it to learn more
const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

let originalGetWinner = utils.getWinner;
utils.getWinner = jest.fn((p1, p2) => p1);
// the above implementation has a bug: it allows Thumbwar to work and pass the test as long as the first param is passed to it, even without the second
// to make sure that an implementation of the mock follows the same signature as the original, there are tests and utils that jest provides

const winner = thumbWar("Fiona Dmello", "Fiona Shane");
// because thumbWar uses utils function that randomly picks the winner,
// the following assertion can pass or fail indeterminately unless its monkey patched as shown

assert.strictEqual(winner, "Fiona Dmello");

utils.getWinner = originalGetWinner;

// we want to mock the utils function
// (not use the actual function but a copy of it which may be slightly modified for testing purposes)
//  we do this as shown in line 20 --> monkey patching

// the important part is to clean up the function and put the right one in place after the testing is done!
// see lines 19 and 28
