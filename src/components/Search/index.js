import React from 'react';
import {connect} from 'react-redux';
import {getFilteredUsers} from '../../actions/'
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            inputValue: ""
        }
        this.onChange =this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            inputValue: e.target.value
        },()=>{
           setTimeout(() => {
            this.props.dispatch(getFilteredUsers(this.state.inputValue))
           }, 1000);
        })
    }
    render(){
        return(
            <div style={{width:'80%',margin:'0px auto'}}
            > 
                <form>
                    <input type="text"
                    style={{width:'100%',padding:'2px 5px'}}
                    placeholder="Search user"
                    onChange={this.onChange} value={this.state.inputValue}/>
                </form>
            </div>
        )
    }
}

export default connect()(Search);