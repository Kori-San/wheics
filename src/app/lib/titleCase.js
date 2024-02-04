export default function titleCase(stringToTreat) {
    const treatedString = stringToTreat
        .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
        .replace(/[-_]+(.)/g, (_, c) => ` ${c.toUpperCase()}`);

    return treatedString;
}
