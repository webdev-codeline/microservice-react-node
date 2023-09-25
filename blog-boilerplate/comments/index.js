const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();

const commentsByPostId = {};
app.use(bodyParser.json());
app.use(cors());
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []) ;
    // res.send(posts);

});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id: commentId, content});
    console.log(comments);
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(commentsByPostId);
    // const  {title} = req.body;
    // posts[id] = {
    //     id, title
    // };

    // res.status(201).send(posts[id]);

});

app.listen(4001, () => {

    console.log('Listening on 4001');
}) 