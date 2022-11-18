const express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users.route');

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
