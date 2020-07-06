"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceSlash = void 0;
exports.sliceSlash = (str) => {
    return str.slice(str.startsWith("/") ? 1 : 0, str.endsWith("/") ? -1 : undefined);
};
