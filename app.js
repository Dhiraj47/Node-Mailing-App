const express = require ('express');
const app =express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: false}));

const mailgunRouter = require('./routes/mailgun.js');
app.use(mailgunRouter);

app.use(express.static('./public'));

app.listen(PORT, () =>{
    console.log('Listening on PORT number: '+ PORT);
});
