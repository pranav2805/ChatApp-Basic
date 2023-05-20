const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="POST"><input type="text" id="username" placeholder="username"><button type="submit">Login</button>');
});


module.exports = router;