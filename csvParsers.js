// csvParser.js

export function parseCSV(csvString) {
    let cell = '';
    let row = [];
    for (let i = 0; i < csvString.length; i++) {
        let char = csvString[i];
        if (char === ',') {
            row.push(cell);
            cell = '';
        } else if (char === '\n') {
            row.push(cell);
            console.log(row[0], row[1], row[2], row[3]);
            row = [];
            cell = '';
        } else {
            cell += char;
        }
    }

    if (cell.length > 0) {
        row.push(cell);
        console.log(row[0], row[1], row[2], row[3]);
    }
}
