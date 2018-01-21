import * as redux from 'redux';
import thunk from 'redux-thunk';
import {users,userInfo} from '../reducers/'

export var configStore = () =>{
    var reducers = redux.combineReducers({
        users: users,
        userInfo: userInfo
    });
    var store =redux.createStore(reducers,redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}