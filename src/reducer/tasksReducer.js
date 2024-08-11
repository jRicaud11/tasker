import { TASK_ACTIONS } from "./actionConstats"

export const initialTasks = [
  {
    name: "test"
  }
]

export function taskReducer (state, action) {
  
  switch(action.type){
    case(TASK_ACTIONS.COMPLETE_TASK): {
      const newTaskList = state.filter((task) => task.name !== action.payload)
      return newTaskList
    }
    case(TASK_ACTIONS.ADD_TASK): {
      console.log('entre con ' + action)
      return [...state, action.payload]
    }
  }
}