import { join } from "./join";
import { full } from "./full";

export class Router<
    Listener extends unknown = unknown,
> {

    public readonly map: Map<string, Map<string, Listener>>;

    public constructor(
        map: Map<string, Map<string, Listener>> = new Map<string, Map<string, Listener>>(),
    ) {
        this.map = map;
    }

    public set(method: string, str: string, listener: Listener): this {
        const path = join(str);
        const fullPath = full(path);
        const listenerMap = this.map.get(method);
        if (listenerMap === undefined) {
            this.map.set(method, new Map([
                [path, listener],
                [fullPath, listener],
            ]));
        } else {
            listenerMap.set(path, listener);
            listenerMap.set(fullPath, listener);
        }
        return this;
    }

    public get(method: string, str: string): Listener | undefined {
        const listenerMap = this.map.get(method);
        return listenerMap === undefined
            ? undefined
            : listenerMap.get(join(str));
    }

    public use(root: string, router: Router<Listener>): void {
        for (const [ method, listenerMap ] of router.map.entries()) {
            for (const [ path, listener ] of listenerMap.entries()) {
                this.set(method, join(root, path), listener);
            }
        }
    }
}
