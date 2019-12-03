let express =require('express');
let app = express();
let config = require('./config');
const models = require("./models");
const routes = require('./routers/router');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');


const graph = express();

graph.use(cors());

graph.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.use('/', routes);



app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
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




