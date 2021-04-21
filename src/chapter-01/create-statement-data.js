import {TragedyPerformanceCalculator} from "./tragedy-performance-calculator";
import {ComedyPerformanceCalculator} from "./comedy-performance-calculator";

export function createStatementData(invoice, plays) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPlay);
    statementData.totalAmount = totalAmount();
    statementData.volumeCredits = volumeCredit();
    return statementData;

    function enrichPlay(perf) {
        const perfCalculator = performanceCalculatorCreator(perf, playFor(perf));
        const result = Object.assign({}, perf);
        result.play = playFor(perf);
        result.amount = perfCalculator.amount;
        result.totalAmount = totalAmount(perf);
        return result;
    }

    function playFor(perf) {
        return plays[perf.playID];
    }

    function volumeCredit() {
        let volumeCredits = 0;
        for (let perf of invoice.performances) {
            volumeCredits += volumeCreditFor(perf);
        }
        return volumeCredits;
    }

    function volumeCreditFor(perf) {
        return performanceCalculatorCreator(perf, playFor(perf)).volumeCredits;
    }

    function totalAmount() {
        let totalAmount = 0;
        for (let perf of invoice.performances) {
            totalAmount += performanceCalculatorCreator(perf, playFor(perf)).amount;
        }
        return totalAmount;
    }

    function performanceCalculatorCreator(perf, play) {
        switch (play.type) {
            case "tragedy": return new TragedyPerformanceCalculator(perf);
            case "comedy": return new ComedyPerformanceCalculator(perf);
            default:
                throw new Error(`Unknownntype: ${play}`)
        }
    }

}
