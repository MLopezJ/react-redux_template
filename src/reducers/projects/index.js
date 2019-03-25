import {handleActions} from 'redux-actions'

const GET_PROJECTS = 'GET_PROJECTS'

export const projects = handleActions(

    {
      [GET_PROJECTS] : (state, action) => [...action.payload]  
    }, 
    []
)