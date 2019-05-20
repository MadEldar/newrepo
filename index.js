const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 8888

app.use(bodyParser.urlencoded({ extended: false}))
app.set('view engine', 'ejs');

app.post('/login',function (req, resp) {
    resp.send("Ban da dang ky thanh cong voi tai khoan " + req.body.username + " va ten nguoi dung " + req.body.fullname);
})

app.listen(port, function(){
console.log(`This is the initiation at port: ${port}!`);
})