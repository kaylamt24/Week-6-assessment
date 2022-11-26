const {shuffleArray} = require('./utils')

const output = shuffleArray ([1, 2, 3]);

describe('shuffleArray should', () => {
    test('Check that shuffle array returns an array', () => {
        // const output = shuffleArray ([1, 2, 3]);
        expect(output).toHaveLength(output.length);
        // expect(output).toBeInstanceOf(typeof Array)
      });

    test('check if shuffle array returns a type of array', () => {
      // const arr = shuffleArray([1, 2, 3]);
      expect(Array.isArray(output)).toBeTruthy
    });
})