const express = require('express');
const router = express.Router();
const {getUsers, getAUser, createUser, deleteUser, updateUser} = require('../controllers/user');

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getAUser);

router.delete('/:id', deleteUser);

router.put('/:id', updateUser);

module.exports = router;