let express =require('express');
let app = express();
let config = require('./config');
const models = require("./models");
const routes = require('./routers/router');
const path 		= require('path');

app.use('/', routes);


app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views/layouts'));
app.set('view engine','pug');


//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")

});
app.listen(3015,err=>{
    err ? console.log(error) : console.log('Server started')
});




