const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/masterstudents', (req, res) => {

    const students = [
        {
            id: 1,
            code:'tarun'
        },
        {
            id: 2,
            code: 'dileep'
        },
        {
            id: 3,
            code: 'adithya'
        },
        {
            id: 4,
            code: 'satwika'
        },
        {
            id: 5,
            code: 'sneha'
        },
    ];
    res.json(students);

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})