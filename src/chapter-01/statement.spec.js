import {statement, statementAsHtml} from "./statement";

describe('Statement', () => {
    it('should render statements as plain text', () => {
        const invoice = {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
        const play = {
            "hamlet": {"name": "Hamlet", "type": "tragedy"},
            "as-like": {"name": "As You Like It", "type": "comedy"},
            "othello": {"name": "Othello", "type": "tragedy"}
        }
        const expectedStatement = 'Statement for BigCo\n' +
            '  Hamlet: $650.00 (55 seats)\n' +
            '  As You Like It: $580.00 (35 seats)\n' +
            '  Othello: $500.00 (40 seats)\n' +
            'Amount owed is $1,730.00\n' +
            'You earned 47 credits\n';

        expect(statement(invoice, play)).toEqual(expectedStatement);
    });
    it('should render statements as html', () => {
        const invoice = {
            "customer": "BigCo",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
        const play = {
            "hamlet": {"name": "Hamlet", "type": "tragedy"},
            "as-like": {"name": "As You Like It", "type": "comedy"},
            "othello": {"name": "Othello", "type": "tragedy"}
        }
        const expectedStatement = "<h1>Statement for BigCo</h1>\n" +
            "<table>\n" +
            "<tr><th>play</th><th>seats</th><th>cost</th></tr>  <tr><td>Hamlet</td><td>55</td><td>$65,000.00</td></tr>\n" +
            "  <tr><td>As You Like It</td><td>35</td><td>$58,000.00</td></tr>\n" +
            "  <tr><td>Othello</td><td>40</td><td>$50,000.00</td></tr>\n" +
            "</table>\n" +
            "<p>Amount owed is <em>$173,000.00</em></p>\n" +
            "<p>You earned <em>47</em> credits</p>\n";

        expect(statementAsHtml(invoice, play)).toEqual(expectedStatement);
    });
});
