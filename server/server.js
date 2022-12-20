const express = require('express')
const {router} = require('./Routes/todoRoute')
const {option} = require('./db/connectDB')
const app = express()
app.use(express.json())

const PORT = 5000

app.use('/',router)

const start = async () => {
    try {
        // connect to database
        const knex = require('knex')(option)
        
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT} `)
        })
    } catch (error) {
        console.log(error.message)
    }
}

// const test = async ()=>{
//     const select = "select * from test"
//     try {
//         const result = await knex.raw(select)
//         console.log(result[0])
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// test()

start()