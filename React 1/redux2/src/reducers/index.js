import {combineReducers} from 'redux';
import article from './articles_reducers';
import gallery from './gallery_reducers';

const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer;