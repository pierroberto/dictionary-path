const assert = require("assert");
const dictionary = require("..");

describe("Example", () => {
  // it("should work with other examples", () => {
  //   const words = ["a", "c", "b", "d"];
  //   assert.equal(dictionary.dictionary(words, "a", "d"), 3);
  // });
  // it("should work with other examples", () => {
  //   const words = ["a", "c", "b", "d"];
  //   assert.equal(dictionary.dictionary(words, "d", "a"), 3);
  // });
  it("should return the correct result for the given example", () => {
    const words = ["hit", "dot", "dog", "cog", "hot", "log"];
    assert.equal(dictionary.dictionary(words, "hit", "cog"), 4);
  });
});
