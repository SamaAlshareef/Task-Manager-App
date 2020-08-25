import React, { useState } from 'react';


const Task = (props) => {
    const [editTitle, setEditTitle] =useState(false);
    const [editDes, setEditDes] =useState(false);
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');
    const finalTitle = ''

    const onFinishEditing = (id)=>{
        
        if(title === "" && description === ""){
                props.onEditTask({
                id,
                title:props.task.title,
                description: props.task.description
            }   
            );
        } else if(title === ""){
            props.onEditTask({
                id,
                title: props.task.title,
                description
            }   
            );
        }else
        if(description === ""){
            props.onEditTask({
                id,
                title,
                description: props.task.description
            }   
            );
        }
       
          
        
       
        setEditTitle(false);
        setEditDes(false);
    }
   

    function onEditTitle (){
        setEditTitle(true);
    }

    function onEditDes(){
        setEditDes(true);
        console.log(editDes);
    }

    const handleTitleInput = (e) =>{
        e.preventDefault(e);
        setTitle(e.target.value);
    }
    const handleDescInput = (e) =>{
        e.preventDefault(e);
        setDescription(e.target.value);
       
    }


    function onRemoveTask () {
        props.onRemoveTask(props.task._id);
    }

        return (  
            
            <div  style={{paddingBottom:'20px'}}>
               
            <div className='task-list'>
                
            <div className='d-flex'  style={{ float:'right'}}>
               <a style={{paddingLeft:'10px', paddingBottom:'20px'}}  className='btn' onClick={onRemoveTask}><img  height='20px' width='20px'  src='./icons/trash.png'/></a>
                   </div>
                {editTitle === false ? 
                <div className='d-flex flex-row'>
                <p className='title-font' style={{fontSize:'20px', padding:'20px', paddingBottom:'0px'}}>{props.task.title}</p>
                <a onClick={onEditTitle} style={{paddingTop:'20px'}} className='btn'><img  height='20px' width='20px'  src='./icons/edit.png'/></a>
                </div>
                :
                <form onSubmit={()=>onFinishEditing(props.task._id)}>          
               
                    <div style={{fontSize:'20px', padding:'20px', paddingBottom:'0px'}}>
                        <textarea type='text'  className='task-textbox' defaultValue={props.task.title} onChange={handleTitleInput} ></textarea>
                        
                        <a  onClick={()=>onFinishEditing(props.task._id)}  className='btn'><img  height='20px' width='20px'  src='./icons/save.png'/></a>
                    </div>
                </form>
               }
                
               {editDes === false ?
               <div className="d-flex flex-row">
            
                    
               <p className='title-font' style={{fontSize:'15px', paddingLeft:'20px', paddingRight:'20px', color:'#000'}}>{props.task.description}</p>
               <a  onClick={onEditDes} style={{marginTop:'-7px'}} className='btn'><img  height='20px' width='20px'  src='./icons/edit.png'/></a>
               
               
          
             </div>:
              <form onSubmit={()=>onFinishEditing(props.task._id)}>          
               
              <div style={{fontSize:'20px', padding:'20px', paddingBottom:'0px'}}>
                  <textarea type='text'  className='task-textbox' defaultValue={props.task.description} onChange={handleDescInput} ></textarea>
                  
                  <a  onClick={()=>onFinishEditing(props.task._id) } style={{marginTop:'-10px'}} className='btn'><img  height='20px' width='20px'  src='./icons/save.png'/></a>
              </div>
          </form>
            }
              
                 
               
              
            
                
              
            </div>
        </div>

        );
    
}


 
export default Task;