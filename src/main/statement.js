import {createStatementData} from "./create-statement-data";

export function statement(invoice, plays) {
    return statementAsText(createStatementData(invoice, plays));
}

function statementAsText(statementData) {
    let result = `Statement for ${statementData.customer}\n`;
    for (let perf of statementData.performances) {
        result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(statementData.totalAmount / 100)}\n`;
    result += `You earned ${statementData.volumeCredits} credits\n`;
    return result;

    function usd(amount) {
        return new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD",
                minimumFractionDigits: 2 }).format(amount)
    }
}

