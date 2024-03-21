// this is an assertion library from node - hover over it to learn more
const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

let originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Fiona Dmello", "Fiona Shane");
// because thumbWar uses utils function that randomly picks the winner,
// the following assertion can pass or fail indeterminately

assert.strictEqual(winner, "Fiona Dmello");

utils.getWinner = originalGetWinner;

// we want to mock the utils function
// (not use the actual function but a copy of it which may be slightly modified for testing purposes)
//  we do this as shown in line 20 --> monkey patching

// the important part is to clean up the function and put the right one in place after the testing is done!
// see lines 19 and 28
