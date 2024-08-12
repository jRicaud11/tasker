import { TASK_ACTIONS } from "./actionConstats"

export const initialTasks = [
  
]

export function taskReducer (state, action) {
  
  switch(action.type){
    case(TASK_ACTIONS.COMPLETE_TASK): {
      // const newTaskList = state.filter((task) => task.name !== action.payload)
      const tasks = [...state];
      for (let i = 0; i <= tasks.length; i++) {
        if (tasks[i].name === action.payload) {
          tasks[i].completed = true
          console.log(state)
          return tasks
        }
      }
      break
    }

    case(TASK_ACTIONS.ADD_TASK): {
      return [...state, action.payload]
    }
    case(TASK_ACTIONS.DELETE_TASK): {
      const newTaskList = state.filter((task) => task.name !== action.payload)
      return newTaskList
    }
  }
}