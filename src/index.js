module.exports = function toReadable(number) {
    const a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const c = "hundred";

    if (number === 0) {
        return "zero";
    } else if (number < 20) {
        return a[number];
    } else if (number < 100) {
        const num = ("" + number).split("");
        const first = b[num[0]];
        const second = a[num[1]];
        const rezult = `${first} ${second}`;
        return rezult.trim();
    } else if (number >= 100) {
        const num = ("" + number).split("");
        const first = a[num[0]];
        const num2 = num.slice(1).join("");

        const second = num2 < 20 ? a[num2 * 1] : `${b[num2[0]]} ${a[num2[1]]}`;
        const rezult = `${first} ${c} ${second}`;
        return rezult.trim();
    }
};
