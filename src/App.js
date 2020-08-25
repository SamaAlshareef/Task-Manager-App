import React, { useEffect, useState } from 'react';
import './App.css';
import {connect, useDispatch} from 'react-redux';
import Manager from './components/Manager';
import TasksPage from './components/TasksPage';
import {FETCH_DATA} from './actions/types';
import {createTask, removeTask, editTask,fetchData} from './actions';
import axios from 'axios';
 

function App(props) {
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get('http://localhost:4000/api/tasks').then((response)=>{
      console.log('helo')
      dispatch({
          type:FETCH_DATA,
          payload: response.data,
      
      })
     
    })
  }, []);
 

  
  const onEditTask = ({id, title,description}) =>{
    
      props.dispatch(editTask({id, title,description}))
  }

  const onCreateTask = ({title,description}) =>{
      props.dispatch(createTask({title,description}))
  }

  const onRemoveTask = (id) =>{
    console.log('trying to delete');
    props.dispatch(removeTask(id));

  }

   return (
    
        <React.Fragment>
          <p></p>
         <TasksPage 
         tasks = {props.tasks}
         onCreateTask = {onCreateTask}
         onRemoveTask = {onRemoveTask}
         onEditTask = {onEditTask}
        />
        </React.Fragment>
      );

  
}

const mapStateToProps = state =>{
    return {
      tasks : state.tasks
    }
}


export default connect(mapStateToProps)(App);
