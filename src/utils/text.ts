export const capitalize = (string: string) =>
    string?.replace(/\b\w/g, (char) => char?.toUpperCase())

export const trunc = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
        return str
    }

    return str.slice(0, maxLength) + '...'
}
