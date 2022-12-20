//config database
const option = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '2142001',
        database: 'todoapp'
    }
}

// connect to database
const knex = require('knex')(option)

// test select
// const select = "select * from test"
// const result = await knex.raw(select)
// console.log(result[0])
// knex.raw(select)
    // .then((result) => {
    //     console.log(result[0])
    // })
    // .catch(err => {
    //     console.log(err.message)
    // })
    // .finally(() => {
    //     knex.destroy()
    // })

module.exports = {
    option
}


