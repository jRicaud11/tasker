import { useState } from "react";
import { Task } from "../Task/Task";
import styles from "./Dashboard.module.css"
import { NewTask } from "../NewTask/NewTask";

export function Dashboard () {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
                    <h1>Tasker</h1>
            <main className={styles.db_container}>
                    {showModal ?
                        <NewTask setModal= {setShowModal}/>    
                    :
                    <>
                     <header className={styles.db_header}>
                        <button className="db-btn" onClick={() => setShowModal(true)}>New Task</button>
                    </header>
                    <section className={styles.db_section}>
                        <Task />
                    </section>
                    </>}
            </main>
           
        </>
    )
}