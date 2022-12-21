import { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from './Todo'

const ListTodo = () => {
    const [listTodo, setListTodo] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            const { data } = await axios('http://localhost:5000/')
            setListTodo(data)
            console.log(data)
        }
        fetchAPI()
    }, [setListTodo])

    return (
        <div>
            {listTodo.map(item => {
                return (
                    <ul>
                        <Todo key={item.Id} id={item.Id} nameTodo={item.NameTodo} detail={item.Detail} />
                    </ul>
                )
            })}
        </div>
    )
}

export default ListTodo
