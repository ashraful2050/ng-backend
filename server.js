var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

const user = require('./routes/user-route');

app.use('/api',user);

//Copy Start
try {
  app.listen(port, () => {
    console.log('Server is running on port: ' + port)
  });
} catch {
console.log('Server Connection error.');
};
//Copy End

module.exports=app