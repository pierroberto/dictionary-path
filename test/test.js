const assert = require("assert");
const dictionary = require("..");

describe("Example", () => {
  const words = ["hit", "dot", "dog", "cog", "hot", "log"];
  it("should return the correct result for the given example", () => {
    assert.equal(dictionary.dictionary(words, "hit", "cog"), 4);
  });
});
