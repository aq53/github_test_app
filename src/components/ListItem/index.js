import React from 'react';

class ListItem extends React.Component {

    render(){
        var {userData}= this.props;
        return (
            <tr 
                style={{backgroundColor:'lightgray',padding:'10px'}}>
               <td
                style={{textAlign:'center'}}
               ><img style={{margin:'5px',height:'50px',width:'50px'}} src={userData.avatar_url}/></td>
                <td
                data-toggle="modal" data-target="#myModal"
                 onClick={()=>this.props.toggleModal(userData.login)} 
                 style={{cursor:'pointer',textAlign:'center'}}
                ><p>{userData.login}</p></td>
                <td 
                 style={{textAlign:'center'}}
                ><a 
                style ={{textDecoration:'none'}}
                href={userData.html_url} target="_blank">Click</a></td>
            </tr>
        );
    }
}

export default ListItem;