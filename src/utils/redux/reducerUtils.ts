/*
import { AnyAction, Reducer } from "redux"

export const createFilteredReducer = (
    reducerFunction: Reducer,
    reducerPredicate: (action: AnyAction) => boolean
): Reducer => (state: IObject, action: AnyAction) => {
    const isInitializationCall = state === undefined
    const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall

    return shouldRunWrappedReducer ? reducerFunction(state, action) : state
}
*/
import { AnyAction, Reducer } from "redux"

export const createFilteredReducer = (
  reducerFunction: Reducer,
  reducerPredicate: (action: AnyAction) => boolean,
): Reducer => (state: IObject, action: AnyAction) => {
  const isInitializationCall = state === undefined
  const shouldRunWrappedReducer =
    reducerPredicate(action) || isInitializationCall
    console.log(shouldRunWrappedReducer)
  return shouldRunWrappedReducer ? reducerFunction(state, action) : state
}