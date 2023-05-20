const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('messages.txt', (err, data) => {
        if(err){
            console.log(err);
            data = 'No chats exists';
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
                <input type="text" id="message" name="message" placeholder="enter message">
                <input type="hidden" id="username" name="username">
                <button type="submit">Send</button>
            </form>`)
    })

    //fs.writeFile('messages.txt', messageBody)

    //res.send('<form action="/" method="POST"><input type="text" name="message" placeholder="enter message"><button type="submit">Send</button>')
});

router.post('/', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('messages.txt', `${req.body.username} : ${req.body.message}`, {flag: 'a'}, (err) => {
        err? console.log(err) : res.redirect('/');
    })
    
})

module.exports = router;