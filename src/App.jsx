import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
        {' '}
        Add{' '}
      </Button>

      <TodoList todos={todos} />
    </div>
  );
}
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}> {todo} </li>;
      })}
    </ul>
  );
}
