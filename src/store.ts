import { applyMiddleware, createStore, Store } from "redux"
import { persistStore, persistReducer, Persistor } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"

import { routerMiddleware } from "connected-react-router"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

import history from "./history"

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["session"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// TODO add typings for preloaded state
const configureStore = (
    preloadedState: any,
): { store: Store; persistor: Persistor } => {
    const middlewares = [sagaMiddleware, routerMiddleware(history)]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    // TODO add HMR later

    const store = createStore(persistedReducer, preloadedState, composedEnhancers)
    const persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    return { store, persistor }
}

const configuredStore = configureStore(undefined)

export default configuredStore