import React, { Component, useState } from 'react';


// const [title,setTitle] = useState("");

// const [description,setTitle] = useState("");

class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            description:''
         }
    }
   

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            title:'',
            description:''
        })
        console.log(this.state)
    }

    handleTitleInput = (e) =>{
        this.setState({
            title: e.target.value
        })
    }
    handleDescInput = (e) =>{
        this.setState({
            description: e.target.value
        })
    }

    render() { 
        return ( 
            <div className=''>

            <form onSubmit={this.handleSubmit}>
                <div className='d-flex flex-column'>
                <input type="text" className="task-textbox products-search" style={{paddingLeft:'22px', width:'200px'}} id="title" onChange={this.handleTitleInput} value={this.state.title }  placeholder="Add your title"/>
                 <div style={{paddingTop:'10px'}}>
                 <input type="text" className="task-textbox products-search" style={{paddingLeft:'22px', width:'596px'}} id="description" onChange={this.handleDescInput} value={this.state.description }  placeholder="Add your description"/>
                 </div>
                
                </div>
               
               
               
                <div style={{paddingTop:'25px'}}>
                    <div className='add-btn' style={{paddingTop:'10px'}}>
                    <a href='#' ><p className='add-task-font'  onClick={this.state.title && this.state.description !== null? this.handleSubmit : null} >Add Task</p></a>
                        
                        
                    </div>
                </div>
                
            </form>
       
            
            </div>
            
         );
    }
}
 
export default AddTodo;