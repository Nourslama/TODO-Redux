
// import React, { Component } from 'react'
// import Modal from 'react-modal'
// import {connect} from "react-redux"
// import {edittask} from '../actions/actions'
// import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'

// Modal.setAppElement("#root");


//  class modal extends Component {
// constructor (props){ 
// super(props)
// this.state={
//     text:"",
    
// }

// }
// openModal = () => this.setState({ modalIsOpen: true });
// closeModal = () => this.setState({ modalIsOpen: false });

// handleChange=e=>{
//     this.setState({
//         text:e.target.value
//     })
// }

//    handleClick=()=>{
//        this.setState({
//            text:this.props.text
//        })
//    }
//     render() {
//         return (
//             <div>
// <FontAwesomeIcon  icon="edit" className="edit" onClick={() => {
//                 this.handleClick();this.openModal()}} ></FontAwesomeIcon>
//  <Modal isOpen={this.state. modalIsOpen}
//         onRequestClose={this.closeModal} className="addModal">
            
          
//   <div className="form">
            
//  <textarea value={this.state.text} type="text" name="text" onChange={this.handleChange } />
 
            
//     <div className="formbutton">
//         <button onClick={() => {
//             this.props.edittask(this.props.id, this.state.text);
//             this.closeModal()}} >Edit</button>
//         <button  onClick={this.closeModal}>Annuler</button>
//         </div></div>
        
//  </Modal>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         edittask:(id,text) => {
//             dispatch(edittask(id,text))
//         }
//     }
// }

// export default connect(null,mapDispatchToProps) (modal)