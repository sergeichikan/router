"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
const slice_slash_1 = require("./slice-slash");
exports.join = (...strings) => {
    return "/" + strings.map(slice_slash_1.sliceSlash).filter((s) => s !== "").join("/");
};
