//Test suite for DateExtraction.ts

import { TextToParsedResults, ParsedResultsToDate } from './DateExtraction';

test ( 'Parses valid date strings', () => {
    const input = ['March 15', 'April 20', 'May 10'];
    const expectedOutput = TextToParsedResults(input);

    expect ( expectedOutput.length ).toBe ( 2 );
    expect ( expectedOutput[0].length ).toBeGreaterThan ( 0 );
    expect ( expectedOutput[1].length ).toBeGreaterThan ( 0 );
});


test ( 'Converts parsed results to Date objects', () => {
    const input = TextToParsedResults(['March 15', 'April 20']);
    const dates = ParsedResultsToDate(input);

    expect ( dates.length ).toBe ( 2 );
    expect ( dates[0] ).toBeInstanceOf ( Date );
    expect ( dates[1] ).toBeInstanceOf ( Date );

});

test ( 'Handles empty input', () => {
    const dates = ParsedResultsToDate([]);
    expect ( dates.length ).toBe ( 0 );
});