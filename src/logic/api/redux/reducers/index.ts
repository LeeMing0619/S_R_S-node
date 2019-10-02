import { ApiState } from "../types"
import { AnyAction } from "redux"
import { IEntityModel } from "logic/api/redux/models"
import * as actionTypes from "../actionTypes";
import { produce } from "immer";
import * as models from "../models"
import get from "lodash/get"


const intialState: ApiState = {
    entities: {},
    lists: {},
    singulars: {
        new: { loading: false, error: null }
    }
}

const apiReducer = (state: ApiState = intialState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.CREATE_ENTITY_INIT:
            return produce(state, draft => {
                draft.singulars.new = { loading: true, error: null }
            })
        case actionTypes.CREATE_ENTITY_SUCCESS: {
            const { data } = action.payload
            const model = (models as IObject)[action.meta.namesapce]
            const id = data[model.idField]
            return produce(state, draft => {
                draft.entities[id] = data
                draft.singulars.new = {
                    loading: false,
                    error: null
                }
            })
        }
        default:
            return state
    }
}

export const createReducerPredicate = (model: IEntityModel) => (
    action: AnyAction,
  ) => get(action, "meta.namespace") === model.namespace

export default apiReducer