export function onlyNumber(str) {
    return str.replace(/\D/g, "");
}

export function testRegex(regex, input) {
    return regex.test(input);
  }