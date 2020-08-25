import React, {useEffect, useState} from 'react';
import TasksList from './TasksList';


const TasksPage = (props) =>{
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [search, setSearch] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);
   

    const resetForm = () =>{
        setTitle('');
        setDescription('');
    }
    const onCreateTask = (e) =>{
        e.preventDefault();
        props.onCreateTask({
            title,
            description
        })
        resetForm();
    };

    const handleTitleInput = (e) =>{
        setTitle(e.target.value);
       console.log('vhecl',title)
    }
    const handleDescInput = (e) =>{
        setDescription(e.target.value);
    }

    

    useEffect(()=>{
        setFilteredTasks(
            props.tasks.filter((task) => {
                return task.title.toLowerCase().includes(search.toLowerCase()) || 
                task.description.toLowerCase().includes(search.toLowerCase()) 
        
            })
        )
    }, [search , props.tasks]);
    return(
 <div className='container-fluid'>
                <div className='row no-gutters'>
                    <div className='col-sm-12'>
                       

                        <div style={{paddingLeft:'100px', paddingTop:'50px'}} className='d-flex flex-column justify-content-center'>
                       
                            <div className='d-flex'>
                                <p className='title-font'>Add Your Tasks</p>
                                <div style={{paddingLeft:'500px'}}>
                                    <form style={{paddingLeft:'20px'}} >
                                        <div className="form-group ">
                                        <div className="fake-input">
                                            <input type="text" className="search-textbox products-search" style={{paddingLeft:'22px'}} id="exampleInputEmail1" onChange={(e)=>{setSearch(e.target.value)}} name="search" placeholder="search by title or description"/>
                                            
                                            {/* <img style={{top:'12px', left:'20px'}} src='./icons/search.png' height='20px' width='20px'/>    */}
                                        </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                           
                            <div  style={{paddingBottom:'50px'}}>
                               
                                <form onSubmit={onCreateTask}>
                                    <div className='d-flex flex-column'>
                                    <input type="text" className="task-textbox products-search" style={{paddingLeft:'22px', width:'200px'}} id="title" onChange={handleTitleInput} value={title}  placeholder="Add your title"/>
                                    <div style={{paddingTop:'10px'}}>
                                    <input type="text" className="task-textbox products-search" style={{paddingLeft:'22px', width:'596px'}} id="description" onChange={handleDescInput} value={description}  placeholder="Add your description"/>
                                    </div>
                                    
                                    </div>
                            
                                
                                    <div style={{paddingTop:'25px'}}>
                                        <div className='add-btn' style={{paddingTop:'10px'}}>
                                        <a href='#' ><p className='add-task-font'  onClick={title && description !== null? onCreateTask : null} >Add Task</p></a>
                                            
                                            
                                        </div>
                                    </div>
                                    
                                </form>

                            </div>
                           
                            <TasksList 
                            tasks={filteredTasks}
                            onRemoveTask={props.onRemoveTask}
                            onEditTask = {props.onEditTask}/>
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
    );
}

export default TasksPage;