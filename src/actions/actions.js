import { ADD_TASK,DELETE_TASK,COMPLETE_TASK,EDIT_TASK } from '../constants/actiontypes';


export function addtask(payload){
    return({
  type:ADD_TASK,
  payload})
}
export function deletetask(payload){
  return({
type:DELETE_TASK,
payload})
}
export function completetask(payload){
  return({
    type:COMPLETE_TASK,
payload})
}
export function edittask(id,input){
  return({
    type:EDIT_TASK,
payloadid:id,
payloadinput:input})
}