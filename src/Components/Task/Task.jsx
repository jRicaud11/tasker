import styles from "./Task.module.css"

export function Task() {
    return (
        <>
        <div className={styles.task_body}>
            <div className={styles.task_description}>
                <button>Complete Task</button>
                <p>Ir a buscar las cosas al hostel</p>
            </div>
            <button>Info...</button>
        </div>
       </>
    )
}