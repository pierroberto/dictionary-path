const assert = require("assert");
const dictionary = require("..");

describe("Example", () => {
  it("should return the correct result for the given example", () => {
    const words = ["hit", "dot", "dog", "cog", "hot", "log"];
    assert.equal(dictionary.dictionary(words, "hit", "cog"), 4);
  });
  it("should work with other examples", () => {
    const words = ["a", "b", "c", "d"];
    assert.equal(dictionary.dictionary(words, "a", "d"), 3);
  });
  it("should work with other examples", () => {
    const words = ["a", "b", "c", "d"];
    assert.equal(dictionary.dictionary(words, "d", "a"), 3);
  });
  it("should work with other examples", () => {
    const words = ["hit", "hot", "hat"];
    assert.equal(dictionary.dictionary(words, "hat", "hot"), 2);
  });
  it("should work with other examples", () => {
    const words = ["it", "at", "or", "ot"];
    assert.equal(dictionary.dictionary(words, "at", "or"), 3);
  });
});
