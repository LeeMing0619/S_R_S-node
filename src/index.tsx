import React from 'react';
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import WebFontLoader from "webfontloader"
import { PersistGate } from "redux-persist/integration/react"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store"

import "normalize.css"
import "./index.css"

// TODO chanenge font to Averta
WebFontLoader.load({
    google: {
        families: [`Source Sans Pro:400,600,700`],
    },
})

const renderApp = () =>
    render(
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <App />
            </PersistGate>
        </Provider>,
        document.getElementById('root')
    )

renderApp()

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
