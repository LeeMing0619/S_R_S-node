type Entity = IObject | null

interface Entites {
    [index: string]: Entity,
    [index: number]: Entity
}

interface ListState {
    loading: boolean,
    error: null | Error,
    ids: string[] | number[]
}

interface Lists {
    [index: string]: ListState
}

interface SingularState {
    loading: boolean,
    error: null | Error
}

interface Singulars {
    [index: string]: SingularState,
    [index: number]: SingularState
}

export interface ApiState {
    entities: Entites,
    lists: Lists,
    singulars: Singulars
}