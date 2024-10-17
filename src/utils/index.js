export function capitalize(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
