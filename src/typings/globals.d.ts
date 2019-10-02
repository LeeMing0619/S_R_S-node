// typings/globals.d.ts

declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
    __REDnUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    env: any
}

declare interface NodeModule {
    hot?: { accept: (path: string, callback: () => void) => void }
}

declare const process: any
declare const require: any

declare interface IObject {
    [key: string]: any
}

declare interface IFSA {
    type: string
    payload?: any
    error?: string | Error
    meta?: any
}
