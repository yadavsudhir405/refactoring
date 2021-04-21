import {PerformanceCalculator} from "./performance-calculator";

export class ComedyPerformanceCalculator extends PerformanceCalculator {

    constructor(perf) {
        super(perf);
    }

    get amount() {
        let result = 30000;
        if (this.perf.audience > 20) {
            result += 10000 + 500 * (this.perf.audience - 20);
        }
        result += 300 * this.perf.audience;
        return result;
    }

    get volumeCredits() {
        return super.volumeCredits + Math.floor(this.perf.audience / 5);
    }
}
