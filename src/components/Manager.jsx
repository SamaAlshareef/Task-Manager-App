import React, { Component } from 'react';
import Todo from './Todo';


const tasks = [{
id: 1,
title: 'Learn React',
description: 'Learn how to use react in building web app'
}, {
id: 2,
title: 'Learn Node',
description: 'Learn how to use node in building server'
}, {
id: 3,
title: 'Learn Array Manipulation',
description: 'Learn how to manipulate arrays in javascript'
}];

class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks}
    }

    deleteTodo = (id)=>{
        const tasks = this.state.tasks.filter((todo=>{
            return todo.id !== id
        }));
       this.setState({
           tasks
       })
           
    }
    addTask = (task) =>{
        task.id = Math.random();
        let tasks = [...this.state.tasks, task ];
        this.setState({
            tasks
        })
    }
    render() { 
        return ( 
            <Todo todoList = {this.state.tasks} deleteTodo= {this.deleteTodo} addTask={this.addTask}/>
         );
    }
}
 

export default Manager;