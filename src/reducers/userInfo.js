export var userInfo = (state={},action)=>{
    switch(action.type){
        case 'GET_USER_INFO':
            return action.data;
        default:
            return state;
    }
}