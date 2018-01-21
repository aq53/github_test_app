import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button} from 'reactstrap';
import { connect } from 'react-redux';
import {getUserInfo} from '../../actions/';

class UserModal extends React.Component{
    constructor(props){
        super(props);
            this.state ={
                userInfo:{}
            }
    }
    componentWillMount(){
        var {dispatch,userName}=this.props;
        if(userName!==''){
            dispatch(getUserInfo(userName));        }
    }
    render(){
        var {userInfo} =this.props;
        return(    
            // <!-- Modal -->
            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
              
                {/* <!-- Modal content--> */}
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                    onClick ={()=>{this.props.toggleModal('')}}
                    type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{userInfo.name}</h4>
                  </div>
                  <div style={{textAlign:'left',width:'100%',margin:'0 auto'}} className="modal-body">
                    <img style={{float:'left',marginRight:'20px', width:'100px',height:'100px'}} src={userInfo.avatar_url} />
                    <div style={{border:'none'}}>
                        <label>Name: </label>
                        {userInfo.name}
                    </div>
                    <div style={{border:'none'}}>
                        <label>Followers: </label>
                        {userInfo.followers}
                    </div><div style={{border:'none'}}>
                        <label>Following: </label>
                        {userInfo.following}
                    </div><div style={{border:'none'}}>
                        <label>Location: </label>
                        {userInfo.location}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button 
                    onClick={()=>{this.props.toggleModal('')}}
                    type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
                
              </div>
            </div>

        );  
    }
}

export default connect((state =>{
    return {
        userInfo: state.userInfo
    }
}))(UserModal);