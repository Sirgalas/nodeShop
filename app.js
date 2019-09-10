//https://www.youtube.com/watch?v=863BZw8Tg6w&list=PLfvnSu_yEgx6iDWzg3mXTBWPc81El4G5d&index=2

let express =require('express');
let app = express();
let config = require('./config');
const models  = require('./models');
app.use(express.static('public'));

app.set('view engine','pug');

app.listen(3015,function () {
    console.log('start app js on 3015')
});

app.get('/', function (req, res){
    res.render('main');
});