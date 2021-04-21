import {createStatementData} from "./create-statement-data";

export function statement(invoice, plays) {
    return renderAsText(createStatementData(invoice, plays));
}

function renderAsText(statementData) {
    let result = `Statement for ${statementData.customer}\n`;
    for (let perf of statementData.performances) {
        result += `  ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(statementData.totalAmount / 100)}\n`;
    result += `You earned ${statementData.volumeCredits} credits\n`;
    return result;
}

export function statementAsHtml(invoice, plays) {

    return renderAsHtml(createStatementData(invoice, plays))
}

function renderAsHtml(data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
    for (let perf of data.performances) {
        result += `  <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
        result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.volumeCredits}</em> credits</p>\n`;
    return result;
}

function usd(amount) {
    return new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
            minimumFractionDigits: 2 }).format(amount)
}

