import { useState } from 'react'
import axios from 'axios'

const FormTodo = () => {
    const [todoValue, setTodoValue] = useState('')
    const [detailValue, setDetailValue] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/addTodo', {
                nameTodo: todoValue,
                detail: detailValue
            })
            console.log(response)  
        } catch (error) {
            console.log(error)
        }
    }

    const todoChangeHandler = (e) => {
        setTodoValue(e.target.value)
    }

    const detailChangeHandler = (e) => {
        setDetailValue(e.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Todo</label>
            <input type='text' onChange={todoChangeHandler} value={todoValue} />
            <br />
            <label>Detail</label>
            <input type='text' onChange={detailChangeHandler} value={detailValue} />
            <br />
            <input type='submit' value='submit' />
        </form>
    )
}

export default FormTodo
