import { ADD_TASK,DELETE_TASK,COMPLETE_TASK,EDIT_TASK } from "../constants/actiontypes"

const InitialState = {
    tablist:[],
    // isComplete:false,
   
}
const todoreducer= (state =InitialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            // return state.concat( action.payload)
        return {
            ...state,tablist:[...state.tablist,action.payload]
        }
        case DELETE_TASK:
            
        return {tablist:[...state.tablist.filter((el,i)=>i!==action.payload) ]
        }
        case COMPLETE_TASK:
        
        return {tablist:[...state.tablist.map((el,i)=>i===action.payload ?{...el,isComplete:!el.isComplete }:el) ]
        }
     case EDIT_TASK:
        return {...state,tablist:[...state.tablist.map((el, i) =>i === action.payloadid ? {...el,text:action.payloadinput} : el )]}
        default:
            return state
    }
}
export default todoreducer