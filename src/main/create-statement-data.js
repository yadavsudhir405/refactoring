export function createStatementData(invoice, plays) {

    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPlay);
    statementData.totalAmount = totalAmount();
    statementData.volumeCredits = volumeCredit();
    return statementData;

    function enrichPlay(perf) {
        const result = Object.assign({}, perf);
        result.play = playFor(perf);
        result.amount = amountFor(perf);
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
        let result = 0;
        result += Math.max(perf.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === playFor(perf).type) result += Math.floor(perf.audience / 5);

        return result;
    }

    function totalAmount() {
        let totalAmount = 0;
        for (let perf of invoice.performances) {
            let thisAmount = 0;
            thisAmount = amountFor(perf);
            totalAmount += thisAmount;
        }
        return totalAmount;
    }

    function amountFor(perf) {
        let result = 0;
        const play = playFor(perf)
        switch (play.type) {
            case "tragedy":
                result = 40000;
                if (perf.audience > 30) {
                    result += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (perf.audience > 20) {
                    result += 10000 + 500 * (perf.audience - 20);
                }
                result += 300 * perf.audience;
                break;
            default:
                throw new Error(`unknown type: ${play.type}`);
        }
        return result;
    }

}
