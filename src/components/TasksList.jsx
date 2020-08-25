import React, { Component } from 'react';
import Task from './Task';

const TasksList = (props) => {
    return (
        <div>
            {props.tasks.map((task)=>(
                <Task key={task._id}
                 task = {task} 
                 onRemoveTask={props.onRemoveTask}
                 onEditTask = {props.onEditTask}
                 onUpdateTitle = {props.onUpdateTitle}/>
            ))}
        </div>
       
    );
}

export default TasksList;