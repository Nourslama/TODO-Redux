
import React, { Component } from 'react';
import {connect} from "react-redux"
import {addtask,deletetask,completetask,edittask} from '../actions/actions'
import Edit from './edit'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//react
 class TodoList extends Component {
    state={
input:''
    }
    handleChange=(e)=>{
        this.setState({
input:e.target.value
        })
    }
    handleClick=()=>{
        if(this.state.input.trim()){
this.props.addtask({
    text:this.state.input,
    id:Math.random(),
    isComplete:false
})
this.setState({input:""})
    } else alert("ecrit quelque chose")}  
    render() {
        return (
            <div className="to-do-form">
             
                <input maxLength="50"onChange={this.handleChange} value={this.state.input}/>
                <button onClick={this.handleClick}>ADD</button>
            
            <ul>
               { this.props.list.map((el,i)=>
               <div className="list">
               <li  key={i} >              
                <span> <FontAwesomeIcon className="buton" icon="check" onClick={()=>this.props.completetask(i)} style={{color: el.isComplete ? "green":"grey"}}></FontAwesomeIcon></span>
                 {/* {el.text} */}
                 <input style={{textDecoration: el.isComplete ? "line-through":"none"}}type="text"  value={el.text} onChange={(e)=>this.props.edittask(i,e.target.value)} />
                <span className="span"> <FontAwesomeIcon className="faicons" icon="trash" onClick={()=>this.props.deletetask(i)}></FontAwesomeIcon></span>
                {/* <span className="span1" ><Edit text={el.text} id={i}/></span> */}
 
               </li>
               </div>)}
            </ul>
            </div>
        )
    }
}
//redux
//1
const mapStateToProps=(state)=>{
    return{
    list:state.tablist,
    

    
    }
    
}
//2
const mapDispatchToProps = (dispatch) => {
    return {
        //addtask 1 une valeur 2eme fonction addtask actions.js
        addtask: (payload) => 
            dispatch(addtask(payload)),
            deletetask: (payload) => 
                dispatch(deletetask(payload)) , 
                completetask: (payload) => 
                dispatch(completetask(payload)), 
                edittask: (id,input) => 
                dispatch(edittask(id,input))
    }
}





//connect react redux
export default connect(mapStateToProps,mapDispatchToProps )(TodoList)