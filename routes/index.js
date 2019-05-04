const users = require('../data')

// module.exports is a function to build my routes
module.exports = app => {
// GET all users
app.get('/users', (req, res)=> {
    res.json(users)
})

// GET one user
app.get('/users/:id', (req, res)=> {
    users.forEach(users => {
        if(users.id === parseInt(req.params.id)) {
            res.json(users)
        }
    })
})

// POST one user
app.post('/users', (req, res)=> {
    // will find the data in req.body
    // console.log(req.body)
    let newUser = req.body
    // users.length + 1 = users/id
    newUser.id = users.length + 1
    // push newUser into array
    users.push(newUser)
    res.send('User was added! Congratulations!')
})
}
