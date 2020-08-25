import React, { Component } from 'react';
import AddTodo from './AddTodo';

const Todo = (props) => {
        return ( 

            <div className='container-fluid'>
                <div className='row no-gutters'>
                    <div className='col-sm-12'>
                        <div style={{padding:'100px'}} className='d-flex flex-column justify-content-center'>
                            <p className='title-font'>Add Your Tasks</p>
                            <div  style={{paddingBottom:'50px'}}>
                                <AddTodo addTask = {this.props.addTask}/>
                               
                            </div>
                            {this.props.todoList.map((task)=>{
                                return(
                                    <div  style={{paddingBottom:'20px'}} key={task.id}>
                                        <div className='task-list' >
                                            <p className='title-font' style={{fontSize:'20px', padding:'20px', paddingBottom:'0px'}}>{task.title}</p>
                                            <div className="d-flex flex-row">
                                        
                                                
                                                    <p className='title-font' style={{fontSize:'15px', paddingLeft:'20px', paddingRight:'20px', color:'#000'}}>{task.description}</p>
                                                    {/* <input type="text" className="search-textbox products-search" style={{paddingLeft:'22px', width:'596px'}} id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="search for company name or location"/> */}
                                                    <a href='#'><img  height='20px' width='20px'  src='./icons/edit.png'/></a>
                                                    <a style={{paddingLeft:'10px'}} href='#' onClick={()=>{this.props.deleteTodo(task.id)}}><img  height='20px' width='20px'  src='./icons/trash.png'/></a>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    
                                )
                            })}
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
         );
    }

 
export default Todo;