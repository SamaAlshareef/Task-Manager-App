import { CREATE_TASK, REMOVE_TASK, EDIT_TASK, FETCH_DATA } from "../actions/types";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Component } from "react";
import { connectAdvanced } from "react-redux";
import { combineReducers, compose } from "redux";





const tasks = (state = {tasks:[]} , action) =>{
    const {payload} = action;
   
    switch(action.type)
    {
        case FETCH_DATA:{
            return{
                ...state,
                tasks:action.payload
            }   
        }
        case EDIT_TASK :{
            const newTasks = state.tasks.find(task => (task._id === payload.id));
            newTasks.title = payload.title;
            newTasks.description = payload.description;
            return{
                ...state,
                tasks:state.tasks

            }
        }

        case CREATE_TASK:{
            return{
                ...state,
                tasks: state.tasks.concat(action.payload)
            };
        }
        case REMOVE_TASK:{
            return{
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload.id)
                
            };
           
        }
       
        default : return state;
    }
    
};

export default tasks;