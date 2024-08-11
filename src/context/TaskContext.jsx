import { createContext, useReducer } from "react";
import { initialTasks, taskReducer } from "../reducer/tasksReducer";
import { TASK_ACTIONS } from "../reducer/actionConstats";
import PropTypes from "prop-types"

export const TasksContext = createContext();

function useTaskReducer() {
  const [state, dispatch] = useReducer(taskReducer, initialTasks)

  const completeTask = (id) => dispatch({
    type: TASK_ACTIONS.COMPLETE_TASK,
    payload: id
  })

  const addTask = (task) => dispatch({
    type: TASK_ACTIONS.ADD_TASK,
    payload: task
  })
  
  return {state, completeTask, addTask}
}

export function TasksProvider ({ children }) {

  const {state, completeTask, addTask} = useTaskReducer()

  return(
    <TasksContext.Provider value={
      {tasks: state,
        completeTask,
        addTask
      } 
    }
    >
      {children}
    </TasksContext.Provider>
  )
}

TasksProvider.propTypes ={
  children: PropTypes.node
}