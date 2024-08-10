import { Task } from "../Task/Task";
import styles from "./Dashboard.module.css"

export function Dashboard () {
    return(
            <main className={styles.db_container}>
                <h1>Tasker</h1>
                <header className={styles.db_header}>
                    <button className="db-btn">New Task</button>
                </header>
                <section className={styles.db_section}>
                    <Task />
                </section>  

            </main>
    )
}