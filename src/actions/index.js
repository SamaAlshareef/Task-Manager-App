import {CREATE_TASK, EDIT_TASK, REMOVE_TASK, FETCH_DATA} from './types';
import { call, put } from 'redux-saga/effects'
import axios from 'axios';
import uuid from 'react-uuid';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

export const fetchData= () =>{
   
    return (dispatch) =>{
        axios.get('http://localhost:4000/api/tasks').then((response)=>{
            dispatch({
                type:FETCH_DATA,
                payload: response.data,
            
            })
           
        })
    }
  
   
}


 export const createTask = ({title,description}) =>{
    
    return (dispatch) =>{
         axios.post('http://localhost:4000/api/tasks', {title,description})
        .then(response =>{
            dispatch({
                type: CREATE_TASK,
                payload:response.data
                })
            }
        )
    }
    
}

export const removeTask = (id) =>{
    return (dispatch) =>{
       
        axios.delete('http://localhost:4000/api/tasks/'+id )
        .then(response =>{
            dispatch({
                type: REMOVE_TASK,
                payload: response.data
                })
               
            }
        )
      
    }
}
export const editTask = ({id, title,description}) => {
    
    return (dispatch) =>{
        axios.put('http://localhost:4000/api/tasks/'+id, {title,description})
        .then(response =>{
           
            dispatch({
                type: EDIT_TASK,
                payload:{
                    id,
                    title,
                    description
                }
                })
            }
        )
          window.location.reload(true);
    }
    
 }

