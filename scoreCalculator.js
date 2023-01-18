function getScore(rolls) {
    let frameCount = 10;
    let scoreCount = 0;
    for(let roll = 0; roll<rolls.length; ++roll) {
        if(frameCount > 1) {
            if(rolls[roll] == 10) {
                scoreCount += rolls[roll] + rolls[roll+1] + rolls[roll+2];
            }
            else {
                if(rolls[roll] + rolls[roll+1] == 10) {
                    scoreCount += rolls[roll] + rolls[roll+1] + rolls[roll +2];
                }
                else {
                    scoreCount += rolls[roll] + rolls[roll+1];
                }
            }

            if(rolls[roll] == 10) {
                --frameCount;
            }
            else {
                --frameCount;
                ++roll;
            }
        }
        if(frameCount ==1) {
            if(rolls.length - roll == 3) --frameCount;
            // calculate score
            if(rolls[roll] == 10) {
                scoreCount += rolls[roll] + rolls[roll+1] + rolls[roll+2];
            }
            else {
                if(rolls[roll] + rolls[roll+1] == 10) {
                    scoreCount += rolls[roll] + rolls[roll+1] + rolls[roll +2];
                }
                else {
                    scoreCount += rolls[roll] + rolls[roll+1];
                }
            }
        }
        
    }
    if(frameCount != 0) {
        throw new Error('Not a 10 frame game')
    }
    // let scoreCount = 0;
    // for(let roll = 0; roll < rolls; ++roll) {
    //     if()
    // }
    return scoreCount;
}

// function getBestScore(games) {

// }

// module.exports = { getScore, getBestScore }

console.log(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]))
console.log(getScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]))