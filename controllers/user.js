const express = require('express');
const { v4: uuidv4 } = require('uuid');

let users = [];

const getUsers = (req, res) => {res.json(users)}

const getAUser = (req, res) => {
    
    const userId = req.params.id;

    const foundUser = users.find((user) => user.id === userId);
  
    res.send(foundUser);

}
 const createUser = (req, res) => {
    const user = req.body;
    const newUserId = {...user, id:uuidv4()}

    users.push(newUserId);
    // console.log(users);
    res.json(newUserId);
}
const deleteUser = (req, res) => {
    const userId = req.params.id;

    users = users.filter((user) => user.id !== userId);
    res.send(users);
}
const updateUser = (req, res) => {
    const userId = req.params.id;
    const {name, age} = req.body;

    users = users.map(function(user) {
        if(user.id === userId) {
            return {
                name, 
                age, 
                id: user.id
            }
        }
             return user;
        })
    res.json(users);
}
module.exports = {getUsers, getAUser, createUser, deleteUser, updateUser}