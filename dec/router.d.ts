export declare class Router<Listener extends unknown = unknown> {
    readonly map: Map<string, Map<string, Listener>>;
    constructor(map?: Map<string, Map<string, Listener>>);
    set(method: string, str: string, listener: Listener): this;
    get(method: string, str: string): Listener | undefined;
    entries(): Generator<[string, string, Listener], void, unknown>;
    use(root: string, router: Router<Listener>): void;
}
