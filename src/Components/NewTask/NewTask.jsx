import { useContext } from "react"
import styles from "./NewTask.module.css"
import PropTypes from "prop-types"
import { TasksContext } from "../../context/TaskContext"
import { useTask } from "../../hooks/useTask"

export function NewTask ({ setModal }) {
  const { addTask } = useContext(TasksContext)

  const {task,
    subTask,
    errors,
    setErrors,
    controlNameChange,
    handleChangeDescription,
    controlChangeSubtask,
    addNewSubtask} = useTask()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(task.name.trim()===''){
      setErrors({...errors, nameError:'Can\'t create a task without name'})
      return
    }
    addTask(task)
    setModal(false)
  }

  return(
    <form className={`${styles.nt_container} ${styles.nt_flexColumn}`} onSubmit={handleSubmit}>
      <h3>New Task</h3>
      <div className={`${styles.nt_fields} ${styles.nt_flexColumn}`}>
        <label>Task Name</label>
        <input placeholder="Name of new task"
          value={task.name}
          onChange={controlNameChange}
        />
        {errors.nameError && <span>{errors.nameError}</span>}

        <label>Description (optional)</label>
        <textarea placeholder="Task description"
          value={task.description}
          onChange={handleChangeDescription}        
        />

        <span>Add subtask</span>

        <div className={styles.nt_subtask}>
          <input placeholder="Subtask name" 
            value={subTask}
            onChange={controlChangeSubtask}
          />
          <span onClick={addNewSubtask}>
            Add
          </span>
        </div>
        {errors.subtaskError && <span>{errors.subtaskError}</span>}

        <div className={styles.nt_st_list}>
          <ul>
            {task.subtasks && task.subtasks.map(el =>{
              return(
                <li key={el}>
                  <label>
                    {el}
                  </label>
            </li>
              )
            })}
          </ul>
        </div>

      </div>

      <footer className={styles.nt_bottonGroup}>
        <button className={styles.nt_btn_cancel} type='button' onClick={()=>setModal(false)}>Cancel</button>
        <button className={styles.nt_btn_create} type="submit">Create</button>
      </footer>
    </form>
  )
}

NewTask.propTypes = {
  setModal: PropTypes.func.isRequired
}