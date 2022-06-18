const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = [];

router.get('/', (req, res) => {res.json(users)});

router.post('/', (req, res) => {
    const user = req.body;
    const newUserId = {...user, id:uuidv4()}

    users.push(newUserId);
    console.log(users);
    res.json(newUserId);
});

router.get('/:id', (req, res) => {
    
    const userId = req.params.id;

    const foundUser = users.find((user) => user.id === userId);
  
    res.send(foundUser);

});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;

    users = users.filter((user) => {user.id !== userId});
    res.send(users);
});
module.exports = router;