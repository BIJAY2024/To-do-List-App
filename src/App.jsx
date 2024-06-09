import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Task } from './Task'

function App() {
  const [todoList, settodoList] = useState([]);
  const [task, settask] = useState("");
  const [color, setColor] = useState ("yellow")
  
  const handleChange = (event)=>{
    settask(event.target.value)
  }
  const addTask = ()=>{
    if (task.trim() !== ""){
      const newtask = {
        id: todoList.length === 0? 1: todoList[todoList.length -1].id + 1,
        taskName: task,
        completed: false,
      }
      settodoList([...todoList, newtask])
      settask("")
    };
   
  }

  const deleteTask =(id)=>{
    const newTask = todoList.filter((task)=>{
      if(task.id === id){
        return false
      } else{
        return true
      }
    })
    settodoList(newTask)
  }
  const completeTask =(id)=>{
    settodoList(
      todoList.map((task)=>{
        if(task.id === id){
          return {...task, completed:true};
        } else {
          return task;
        }
      })
    )
  }
  
  return (
    <>
    <div className='todoList container'>
      <h1> Your Todo-List</h1>
      <div className='item'>
      <input type="text" value={task} onChange={handleChange}/>
      <button onClick={addTask}>+ Task</button>
      </div>
      </div>

      <div className='list'>
        {todoList.map((task,index)=>{
          return (
            <div key={index}>
            <div className='list-item'>
             <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask}
             completeTask = {completeTask}
             />
            </div>
            </div>
          )
        })}
    </div>
    </>
    )
  }
  export default App
  
