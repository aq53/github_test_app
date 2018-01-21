import React from 'react';
import {getAllUsers,getus} from '../../actions/';
import ListItem from '../ListItem/';
import {Table} from 'reactstrap';
import {connect} from 'react-redux';
import UserModal from '../UserModal/';

class ListElement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:false,
            userName: ''
        }
        this.toggleModal = this.toggleModal.bind(this);
    }
    componentWillMount(){
        this.props.dispatch(getAllUsers());
    }
    toggleModal(userName){
        this.setState({
            showModal: !this.state.showModal,
            userName
        })
    }
    render(){
        return (
            <div>
                <Table style={{width:'80%',margin:'10px auto',padding:'25px',}} 
                 hover bordered={true}>
                    <thead >
                        <th style={{textAlign:'center'}}>Avatar</th>
                        <th style={{textAlign:'center'}}>Name</th>
                        <th style={{textAlign:'center'}}>Github link</th>
                    </thead>
                <tbody>
                    {this.props.users.map(user =>(
                        <ListItem toggleModal={this.toggleModal} key={user.id}
                        userData={user} />
                    ))}
                </tbody>
                </Table>
                {this.state.showModal ?
                      <UserModal toggleModal={this.toggleModal} userName={this.state.userName}/>:
                null}
            </div>                
        )
    }
}

export default connect((state=> {
    return {
        users : state.users
    }
}))(ListElement)