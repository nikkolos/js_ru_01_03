import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE } from '../actions/constants'
import SimpleStore from './SimpleStore'

class ArticleStore extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore