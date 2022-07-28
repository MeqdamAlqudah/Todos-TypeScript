import classes from './TodoItem.module.css'
const TodoItem:React.FC<{text:string,removeHandler:()=>void}> = (props)=>{

 return(
  <li className={classes.item} >{props.text}
  <button onClick = {props.removeHandler} className={classes.remove}>Remove</button></li>
 );
};

export default TodoItem;
