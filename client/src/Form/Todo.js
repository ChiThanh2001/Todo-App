import {useState} from 'react'
import axios from 'axios'

const Todo = ({id,nameTodo,detail}) => {
    const [delTodo,setDelTodo] = useState(false)

    const deleteTodo =async ()=>{
        try {
            const {data} = await axios.delete(`http://localhost:5000/deleteTodo/${id}`)  
            console.log(data)  
            setDelTodo(true)    
        } catch (error) {
            console.log(error.message)
        }
    }   
    
    const updateTodo = async ()=>{
        try {
            const {data} = await axios.patch(`http://localhost:5000/deleteTodo/${id}`,{
                
            })
            console.log(data)
            
        } catch (error) {
            
        }
    }

    return (
        <div>
            <li key={id}>
                <div>
                    Name todo: {nameTodo}
                </div>

                <div>
                    Detail: {detail}
                </div>

                <br/>
                
                <button onClick={deleteTodo}>Delete</button>

                <button onClick={updateTodo}>Update</button>

                <div>
                    {delTodo && 'Delete successfully'}
                </div>
            </li>
        </div>
    )
}

export default Todo
