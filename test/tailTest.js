const assert = require('chai').assert;
const tail   = require('../tail');

const result = tail([1, 2, 3]);
const words = [4, 2, 3];

describe("#tail", () => {
  it("returns ['2', '3'] for ['1', '2', '3']", () => {
    assert.deepEqual(tail(['1', '2', '3']), ['2', '3']);
  });
});

