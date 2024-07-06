import Header from './Components/Header'
import TodoItem from './Components/TodoItem';
import Button from './Components/Button';
import './style.css'
import './App.css'

function App() {
  

  return (
    <div className="todo-container">
      <Header header="TODOIE"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Play"/>
      <TodoItem text="Drink"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="repeat again"/>
      <Button/>
    </div>
  )
}

export default App
