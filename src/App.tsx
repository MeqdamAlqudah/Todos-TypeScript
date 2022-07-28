import Todos from './components/Todos';
import './App.css';// in modern Reat apps we can't get red of this import statment here
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

function App() {

  return (
    <TodosContextProvider>
    <div className="App">

      <NewTodo />
      <Todos />
    </div>
    </TodosContextProvider>
  );
}

export default App;
