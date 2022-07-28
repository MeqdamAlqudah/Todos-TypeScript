import React, { useState } from 'react';
import Todo from '../models/todo';
type TodosContextObj = {
  items:Todo[];
  addTodo: (item:string)=>void;
  removeTodo:(id:string)=>void;
};
export const TodosContext = React.createContext<TodosContextObj>({
  items:[],
  addTodo: ()=>{},
  removeTodo:(id:string)=>{}
});

const TodosContextProvider: React.FC<{children: React.ReactNode}> = (props)=>{
  const [todos,setTodos] = useState<Todo[]>([]);
  const removeTodo = (id:string)=>{
    setTodos((previousTodo)=>{
      return previousTodo.filter((item)=>item.id !== id);
    });
  };
  const todoHandler = (item:string)=>{
    const newTodo = new Todo(item)
    setTodos((previousTodo)=>{
      return previousTodo.concat(newTodo);
    });// it is good for making sure that our code match the last snapshot
  };
  const contextValue:TodosContextObj = {
    items:todos,
    addTodo: todoHandler,
    removeTodo: removeTodo
  };
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
}

export default TodosContextProvider;
