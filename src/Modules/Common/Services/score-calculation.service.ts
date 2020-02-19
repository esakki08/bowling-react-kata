enum ScoreIndicator {
    STRIKE = 'X',
    SPARE = '/',
    MISS = '-',
    EMPTY = ' ',
}

enum Numeric {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    TEN = 10,
    TWENTY = 20
}

export class ScoreCalculation{

    private gameResult: string = ScoreIndicator.EMPTY;
    private gameScore: number = Numeric.ZERO;

    constructor() { }
    
    // Setter to set game result string input
    set setGameResult(result: string) {
        this.gameResult = result;
    }

    // Setter function to set game score
    set setGameScore(score: number) {
        this.gameScore = score;
    }

    // Getter to obtain total score calculated from externally
    get getScore() {
        this.calculateGameScore();
        return this.gameScore;
    }

    //To get single role score
    private getRollValue(rollValueIndicator: string): number {
        switch (rollValueIndicator) {
            case ScoreIndicator.STRIKE:
                return Numeric.TEN;
            case ScoreIndicator.SPARE:
                return Numeric.TEN;
            case ScoreIndicator.MISS || ScoreIndicator.EMPTY:
                return Numeric.ZERO
            default:
                return parseInt(rollValueIndicator) || Numeric.ZERO;
        }
    }

    //To calculate total score
    private async calculateGameScore() {
        console.log(this.gameResult.length, this.gameScore)
        let totalScore: number = Numeric.ZERO;
        for (let rollCount = Numeric.ZERO; (rollCount < this.gameResult.length && rollCount < Numeric.TWENTY); rollCount++) {
            const rollResult = this.gameResult[rollCount];
            if (rollResult.includes(ScoreIndicator.STRIKE)) {
            
                const currentRollValue = this.getRollValue(rollResult);
                const nextRollValue = this.getRollValue(this.gameResult[rollCount + Numeric.TWO]);
                const secondRollValue = (this.gameResult[rollCount + Numeric.TWO] && this.gameResult[rollCount + Numeric.TWO].includes(ScoreIndicator.STRIKE)) ?
                    this.getRollValue(this.gameResult[rollCount + Numeric.FOUR]) : this.getRollValue(this.gameResult[rollCount + Numeric.THREE]);
                totalScore += currentRollValue + nextRollValue + secondRollValue;

            } else if (rollResult.includes(ScoreIndicator.SPARE)) {

                const previousRollValue = this.getRollValue(this.gameResult[rollCount - Numeric.ONE]);
                const currentRollValue = this.getRollValue(rollResult);
                const nextRollValue = this.getRollValue(this.gameResult[rollCount + Numeric.ONE]);
                totalScore += currentRollValue - previousRollValue + nextRollValue;
        
            } else {
                totalScore += this.getRollValue(rollResult);
            }
        }
        this.setGameScore = totalScore;
    }
}