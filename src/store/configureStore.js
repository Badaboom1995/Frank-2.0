// store creation
import { createStore, combineReducers } from 'redux';
import goalsReducer from '../reducers/goals'


export default () => {
    const store = createStore(
        combineReducers({
            goals: goalsReducer
            
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    return store;
}
