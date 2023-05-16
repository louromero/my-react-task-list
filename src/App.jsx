import Header from './components/Headers'
import TodoInput from './components/TodoInput'
import { TaskList } from './components/TaskList'
import TodoInfo from './components/TodoInfo'


function App() {

  return (
    <>
      <Header />
      <div class="container">
        <TodoInput />
        <div class="container-lista">
          <TaskList />
        </div>
        <TodoInfo />
      </div>
      

    </>
  )
}

export default App
