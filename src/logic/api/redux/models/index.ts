export interface IEntityModel {
    namespace: string,
    apiPath: string,
    methods: IObject,
    isUrlEncoded?: boolean,
    idField?: string
}

export const university: IEntityModel = {
    namespace: "university",
    apiPath: "api/universities",
    methods: { GET: true },
    idField: "id"
}

export const school: IEntityModel = {
    namespace: "school",
    apiPath: "api/schools",
    methods: { GET: true },
    idField: "id"
}

export const userDetails: IEntityModel = {
    namespace: "userDetails",
    apiPath: "users/additional_data",
    methods: { POST: true },
    isUrlEncoded: true,
    idField: "user"
}