import { useState } from "react"

export function useTask() {
  const [task, setTask] = useState({
    name:'',
    description:'',
    completed: false,
    subtasks:[]
  })

  const [errors, setErrors] = useState({
    nameError:'',
    subtaskError:''
  })

  const [subTask, setSubTask] = useState('')

  const controlNameChange = (e) => {
    const newName = e.target.value
    if (newName.length < 5) {
      setErrors({...errors, nameError:'Name must be longer than 5 characters'})
    } else {
      setErrors({...errors, nameError:''})
    }
    setTask({...task, name: newName})

  }
    
  const handleChangeDescription = (e) =>{
    setTask({...task, description: e.target.value})
  }

  const controlChangeSubtask = (e) => {
    const newSubtask = e.target.value
    if(newSubtask.length > 30) {
      setErrors({...errors, subtaskError:'Subtask must be shorter than 30 characters'})
    } else {

      setErrors({...errors, subtaskError:''})
    }
    setSubTask(newSubtask)
  }

  const addNewSubtask = () => {
    if(subTask.length === 0) {
      setErrors({...errors, subtaskError:'Can\'t add an empty subtask'})
      return
    }
    if(task.subtasks.length === 5){
      setErrors({...errors, subtaskError:'Can\'t add more than 5 subtasks'})
    } else {
      setTask({...task, subtasks:[...task.subtasks, subTask]})
      setErrors({...errors, subtaskError:''})
    }
  }

  return {
    task,
    subTask,
    errors,
    setErrors,
    controlNameChange,
    handleChangeDescription,
    controlChangeSubtask,
    addNewSubtask
  }
}