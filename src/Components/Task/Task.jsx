import { useContext } from "react"
import styles from "./Task.module.css"
import { TasksContext } from "../../context/TaskContext"

export function Task() {
    const { tasks, completeTask } = useContext(TasksContext)

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
                                <button onClick={() => completeTask(task.name)}>Complete Task</button>
                                <p>{task.name}</p>
                             </div>
                            <button onClick={() => handleClick(task.description)}>Info...</button>
                        </div>
                        
                    )
                })
                    

                }
            </div>
        </>
    )
}