export function formatNumberWithCommas(number: number): string {
    let numberString: string = number.toString();
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return numberString;
}

