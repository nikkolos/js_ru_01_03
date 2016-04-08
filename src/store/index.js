import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../ruducers'
//import logger from '../middlewares/logger'
import api from '../middlewares/api'
import DevTools from '../containers/DevTools'
import createLogger from 'redux-logger'

const enhancer = compose(
    applyMiddleware(api, createLogger()),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

if (module.hot) {
    module.hot.accept('../ruducers', () =>
        store.replaceReducer(require('../ruducers').default)
    );
}


window.store = store

export default store