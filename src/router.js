"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const join_1 = require("./join");
const full_1 = require("./full");
class Router {
    constructor(map = new Map()) {
        this.map = map;
    }
    set(method, str, listener) {
        const path = join_1.join(str);
        const fullPath = full_1.full(path);
        const listenerMap = this.map.get(method);
        if (listenerMap === undefined) {
            this.map.set(method, new Map([
                [path, listener],
                [fullPath, listener],
            ]));
        }
        else {
            listenerMap.set(path, listener);
            listenerMap.set(fullPath, listener);
        }
        return this;
    }
    get(method, str) {
        const listenerMap = this.map.get(method);
        return listenerMap === undefined
            ? undefined
            : listenerMap.get(join_1.join(str));
    }
    use(root, router) {
        for (const [method, listenerMap] of router.map.entries()) {
            for (const [path, listener] of listenerMap.entries()) {
                this.set(method, join_1.join(root, path), listener);
            }
        }
    }
}
exports.Router = Router;
