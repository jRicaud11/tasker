import './App.css'
import { Dashboard } from './Components/Dashboard/Dashboard'
import { TasksProvider } from './context/TaskContext'

function App () {

  return (
    <TasksProvider>
      <Dashboard />
    </TasksProvider>
  )
}

export default App
