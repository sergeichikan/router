import { sliceSlash } from "./slice-slash";

export const join = (...strings: string[]): string => {
    return "/" + strings.map(sliceSlash).filter((s) => s !== "").join("/");
};
