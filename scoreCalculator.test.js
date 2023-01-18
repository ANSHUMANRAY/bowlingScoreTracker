const { getScore, getBestScore } = require('./scoreCalculator');

describe("Bowling Score Calculator", () => {
    describe("Get Total Score", () => {
        it('should throw error when game does not have 10 frames', () => {
            expect(getScore([10, 5, 5, 9, 0])).toThrow('Not a 10 frame game')
        })
        it('should throw error when roll is not an array', () => {
            expect(getScore(10, 5, 5, 9, 0)).toThrow('unSupported type: Not an array')
        })
        it('should return 90 when rolls are [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]', () => {
            expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
        })
    })
})