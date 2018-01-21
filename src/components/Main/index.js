import React from 'react'
import {getAllUsers} from '../../actions/userActions';
import ListElement from '../ListElement/';
import Search from '../Search/';

class Main extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         users: []
    //     }
    //     this.filterData = this.filterData.bind(this);
    // }
    // componentWillMount(){
    //     this.props.dispatch(getAllUsers()).then(res=>{
    //         this.setState({users:res.data});
    //     })
    // }
    // filterData(value){
    //     var {users} = this.props;
    //     var filteredUsers = users.filter(user =>{
    //         return value.length ===0 || user.login.indexOf(value) > -1;
    //     })
    //     this.setState({
    //         users:filteredUsers
    //     })
    // }
    render(){
        return(
            <div>
                <h1>Simple React App</h1>
                <Search />
                <ListElement />
            </div>
        )
    }
}

export default Main;