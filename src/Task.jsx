import './App.css'

export const Task = (props) =>{
    return(
        <div className='list-item'
        style={{backgroundColor: props.completed?  "rgba(0, 128, 0, 0.7)" : "rgba(255, 255, 0, 0.7)"}}
        >
            <h3>{props.taskName}</h3>
            <button onClick={()=> props.completeTask(props.id)}>✓</button>
            <button onClick={()=> props.deleteTask(props.id)}>X</button>
        </div>
    )
}