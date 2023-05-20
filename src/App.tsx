import './app.css'

import { Header } from "./components/layout/header"
import { Footer } from "./components/layout/footer"
import TaskForm from './components/layout/TaskForm'
import TaskList from './components/layout/TaskList'

function App() {

  return (
    <div>
      <Header />
      <main className='main'>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
