import * as chrono from 'chrono-node';

export function TextToParsedResults(strArr: string[]): chrono.ParsedResult[][] {
    let parseArr: chrono.ParsedResult[][] = [];
    for (let i: number = 0; i < strArr.length; i++) {
        const results = chrono.strict.parse(strArr[i]);
        const dates = results.filter((result: chrono.ParsedResult): boolean => result.start.isCertain('month') && result.start.isCertain('day') && !result.start.isCertain('meridiem'))

        parseArr.push(dates);
    }
    return parseArr;
}

export function ParsedResultsToDate(arr: chrono.ParsedResult[][]): Date[] {
    let dateArr: Date[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr[i].length; j++) {
            if(arr[i][j]!== undefined)
                dateArr.push(arr[i][j].start.date());
        }
    }
    return dateArr;
}