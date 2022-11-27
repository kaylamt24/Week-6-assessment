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


// const myArray = [1, 2, 3, 4, 5]

describe('The shuffleArray should (following Kyle)', () => {

    test('return an array of the same length', () => {
        let myArray = [1, 2, 3, 4, 5]
        let result = shuffleArray(myArray)
        expect(result.length).toEqual(myArray.length)
    });

    test('should shuffle array of items', () => {
        let myArray = [1, 2, 3, 4, 5]
        let result = shuffleArray(myArray)
        expect(result.join()).not.toEqual(myArray.join())
    })
})