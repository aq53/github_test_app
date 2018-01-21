import axios from 'axios';
import {apiURL} from './constApi';

export var getUserInfo = (user) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //API
            axios.get(apiURL+'users/'+user).then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type: 'GET_USER_INFO',
                        data: res.data
                    })
                    resolve(res);
                } else {
                    reject(res);
                }
            }).catch(err => {
                reject(err);
            })
        })
    }
}
