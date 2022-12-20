const express = require('express')
const { option } = require('../db/connectDB')
const statusCode = require('http-status-codes')
const knex = require('knex')(option)

const app = express()
app.use(express.json())
const router = express.Router()

router.get('/',async (req,res)=>{
    const response = await knex.raw("select * from todoapp.todolist")
    res.json(response[0])
})

router.post('/addTodo',async (req,res)=>{
    const {nameTodo,detail} = req.body
    if(!nameTodo){
        return res.status(statusCode.BAD_REQUEST).json('Please provide a name for your todo')
    }
    const addTodo = `INSERT INTO todoapp.todolist(NameTodo,Detail) VALUES("${nameTodo}","${detail}")`
    try {
        const response = await knex.raw(addTodo)
        res.json(response)
    } catch (err) {
        throw new Error(err.message)
    }
})

router.delete('/deleteTodo/:id',async (req,res)=>{
    const {id} = req.params
    const deleteSQL = `DELETE from todoapp.todolist where Id=${id}`
    try {
        const result = await knex.raw(deleteSQL)
        if(!result[0].affectedRows){
            return res.json("Todo không tồn tại")   
        }
        return res.json("Delete successfully")
    } catch (error) {
        throw new Error(error.message)
    }
})

router.patch('/updateTodo/:id',(req,res)=>{
    const {nameTodo , detail} = req.body
    const {id} = req.params
    if(!nameTodo){
        return res.status(statusCode.BAD_REQUEST).json('Please provide a name for your todo')
    }
    const update = `UPDATE todoapp.todolist SET NameTodo="${nameTodo}",Detail="${detail}" WHERE Id=${id}`
    knex.raw(update)
    .then((result)=>{
        if(!result[0].affectedRows){
            return res.json("Todo không tồn tại")   
        }
        return res.json("Update successfully") 
    })
    .catch(err=>{
        throw new Error(err.message)
    })
})

module.exports = {
    router
}