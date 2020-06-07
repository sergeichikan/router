export const sliceSlash = (str: string): string => {
    return str.slice(str.startsWith("/") ? 1 : 0, str.endsWith("/") ? -1 : undefined);
}
