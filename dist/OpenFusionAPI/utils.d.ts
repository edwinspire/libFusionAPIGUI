/// <reference types="svelte" />
/**
 * @param {string} string_url
 */
export function validateURL(string_url: string): boolean;
export namespace url_paths {
    let getfunctions: string;
    let getHandler: string;
    let Methods: string;
    let listEnv: string;
    let listApps: string;
    let getApp: string;
    let saveApp: string;
    let saveMethod: string;
    let login: string;
}
export const userStore: import("svelte/store").Writable<{}>;
export const listMethodStore: import("svelte/store").Writable<{}>;
export const listHandlerStore: import("svelte/store").Writable<{}>;
export const listFunctionStoreDev: import("svelte/store").Writable<{}>;
export const listFunctionStoreQA: import("svelte/store").Writable<{}>;
export const listFunctionStorePRD: import("svelte/store").Writable<{}>;
export const listAppVars: import("svelte/store").Writable<{}>;
export function formatJsonForHtmlCode(json: any): string;
export function getListFunction(token: string, appName: string): Promise<void>;
export function getListHandler(token: string): Promise<void>;
export function getListMethods(token: string): Promise<void>;
export namespace css_handlers {
    namespace FETCH {
        let css: string;
        let label: string;
        let icon: string;
    }
    namespace JS {
        let css_1: string;
        export { css_1 as css };
        let label_1: string;
        export { label_1 as label };
        let icon_1: string;
        export { icon_1 as icon };
    }
    namespace SOAP {
        let css_2: string;
        export { css_2 as css };
        let label_2: string;
        export { label_2 as label };
        let icon_2: string;
        export { icon_2 as icon };
    }
    namespace SQL {
        let css_3: string;
        export { css_3 as css };
        let label_3: string;
        export { label_3 as label };
        let icon_3: string;
        export { icon_3 as icon };
    }
    namespace FUNCTION {
        let css_4: string;
        export { css_4 as css };
        let label_4: string;
        export { label_4 as label };
        let icon_4: string;
        export { icon_4 as icon };
    }
}
