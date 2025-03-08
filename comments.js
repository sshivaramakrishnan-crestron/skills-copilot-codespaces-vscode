//create webserver
//create comments array
//create a route for comments
//create a route for create comments
//create a route for delete comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

let comments = [
    {
        id: 1,
        name: 'John Doe',
        comment: 'Hello'
    },
    {
        id: 2,
        name: 'Jane Doe',
        comment: 'Hi'
    }
];

app.use(bodyParser.json());

//get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

//create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

//delete a comment
app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(comment => {
        return comment.id !== Number(id);
    });
    res.json({
        message: `Deleted comment with id ${id}`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Test with Postman
//GET http://localhost:3000/comments
//POST http://localhost:3000/comments
//DELETE http://localhost:3000/comments/1
//GET http://localhost:3000/comments
//GET http://localhost:3000/comments/2
//GET http://localhost:3000/comments/3
//DELETE http://localhost:3000/comments/2
//GET http://localhost:3000/comments
//GET http://localhost:3000/comments/2
//GET http://localhost:3000/comments/3

//Test with CURL
//curl http://localhost:3000/comments
//curl -X POST -H "Content-Type: application/json" -d "{\"id\": 3, \"name\": \"Alice\", \"comment\": \"Hey\"}" http://localhost:3000/comments
//curl -X DELETE http://localhost:3000/comments/1
//curl http://localhost:3000/comments
//curl http://localhost:3000/comments/2
//curl http://localhost:3000/comments/3
//curl -X DELETE http://localhost:3000/comments/2
//curl http://localhost:3000/comments
//curl http://localhost:3000/comments/2
//curl http://localhost:3000/comments/3

//Test with Fetch API
//fetch('http://localhost:3000/comments')
//.then(res => res.json())
//.then(data => console.log(data