import React,{ useContext }  from 'react';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';
const Todos: React.FC = () =>{
  const todosCtx = useContext(TodosContext);
  return (<ul className={classes.todos}>
    {todosCtx.items.map((item)=>
    <TodoItem removeHandler = {()=>todosCtx.removeTodo(item.id)} key={item.id} text = {item.text}/>)
    }
  </ul>)
}

export default Todos;
