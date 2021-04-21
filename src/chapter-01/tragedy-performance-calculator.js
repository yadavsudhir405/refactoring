import {PerformanceCalculator} from "./performance-calculator";

export class TragedyPerformanceCalculator extends PerformanceCalculator {
    constructor(perf) {
        super(perf);
    }

    get amount() {
        let result = 40000;
        if (this.perf.audience > 30) {
            result += 1000 * (this.perf.audience - 30);
        }
        return result;
    }

    get volumeCredits() {
        return super.volumeCredits;
    }
}
