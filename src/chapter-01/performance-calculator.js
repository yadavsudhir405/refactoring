export class PerformanceCalculator {

    constructor(perf) {
        this.perf = perf;
    }

    get amount() {
        throw new Error("Must be implemented by sub-class");
    }

    get volumeCredits() {
        return Math.max(this.perf.audience - 30, 0)
    }
}
