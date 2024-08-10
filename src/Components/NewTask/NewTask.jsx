import styles from "./NewTask.module.css"

export function NewTask ({ setModal }) {

  return(
    <section className={`${styles.nt_container} ${styles.nt_flexColumn}`}>
      <h3>New Task</h3>
      <div className={`${styles.nt_fields} ${styles.nt_flexColumn}`}>
        <label>Task Name</label>
        <input placeholder="Name of new task"/>
        <label>Description</label>
        <textarea placeholder="Task description"/>
        <span>Add subtask</span>
      <div className={styles.nt_subtask}>
        <input placeholder="Subtask name" />
        <span>Add</span>
      </div>
      </div>
      <footer className={styles.nt_bottonGroup}>
        <button className={styles.nt_btn_cancel} onClick={()=>setModal(false)}>Cancel</button>
        <button className={styles.nt_btn_create}>Create</button>
      </footer>
    </section>
  )
}