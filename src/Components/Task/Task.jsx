import { useContext } from "react"
import styles from "./Task.module.css"
import { TasksContext } from "../../context/TaskContext"

export function Task() {
    const { tasks, completeTask, deleteTask } = useContext(TasksContext)

    const handleClick = (description) => {
        alert(description)
    }

    return (
        <>
            <div className={styles.task_body}>
                { tasks.map(task => {
                    return (
                        
                        <div className={styles.task_description} key={task.name}>
                            <div className={styles.task_container}>
                                {
                                    task.completed === false ? <button onClick={() => completeTask(task.name)} type="button">Complete Task</button>
                                    : <button>Completed</button>
                                }
                                <p>{task.name}</p>
                             </div>
                             <button onClick={()=>{deleteTask(task.name)}}>Delete</button>
                            <button onClick={() => handleClick(task.description)}>Info...</button>
                        </div>
                        
                    )
                })
                    

                }
            </div>
        </>
    )
}