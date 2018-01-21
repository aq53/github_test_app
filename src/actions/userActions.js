import axios from 'axios';
import {apiURL} from './constApi';

export var getAllUsers = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //API
            axios.get(apiURL+'users').then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type: 'GET_ALL_USERS',
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


export var getFilteredUsers = (value) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            //API
            axios.get(apiURL+'search/users?q='+value).then((res) => {
                if (res.status === 200) {
                    dispatch({
                        type: 'GET_ALL_USERS',
                        data: res.data.items
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