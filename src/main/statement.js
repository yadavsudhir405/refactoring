export function statement(invoice, plays) {
    let result = `Statement for ${invoice.customer}\n`;

    for (let perf of invoice.performances) {
        result += `  ${playFor(perf).name}: ${usd(amountFor(perf)/100)} (${perf.audience} seats)\n`;
    }

    result += `Amount owed is ${usd(totalAmount()/100)}\n`;
    result += `You earned ${volumeCredit()} credits\n`;
    return result;

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

    function playFor(perf) {
        return plays[perf.playID];
    }

    function usd(amount) {
        return new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD",
                minimumFractionDigits: 2 }).format(amount)
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
}
