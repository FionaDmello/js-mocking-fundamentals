const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  const originalGetWinner = utils.getWinner;

  // jest.fn is a wrapper for an implementation of a mock function which helps make sure the mock actually mocks the mocked function
  utils.getWinner = jest.fn((p1, p2) => p1);

  let winner = thumbWar("Fiona Dmello", "Sharon Salzburg"); // 1st call
  let winner2 = thumbWar("A", "B"); // 3rd call

  expect(winner).toBe("Fiona Dmello"); // 2nd call
  expect(winner2).toBe("A"); //4th call

  // below are ways to make sure that mock covers all cases
  //expect(utils.getWinner).toHaveBeenCalledTimes(4);
  //expect(utils.getWinner).toHaveBeenNthCalledWith( 1, "Fiona Dmello", "Sharon Salzburg");
  //expect(utils.getWinner).toHaveBeenNthCalledWith(3, "A", "B");
  //expect(utils.getWinner).toHaveBeenNthCalledWith(4, "A", "B");

  // all of the above cases can simply be covered as follows
  expect(utils.getWinner.mock.calls).toEqual([
    ["Fiona Dmello", "Sharon Salzburg"],
    ["Fiona Dmello", "Sharon Salzburg"],
    ["A", "B"],
    ["A", "B"],
  ]);

  utils.getWinner = originalGetWinner;
});
