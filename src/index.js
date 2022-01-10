const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const methodOverride = require('method-override')
const route = require('./routes');
const db = require('./config/db');




//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// ----------------- session -------------------------



// ----------------- session -------------------------

app.use(methodOverride('_method'));
//--------------------------------------------//
const exphbs = require('express-handlebars');
const { triggerAsyncId } = require('async_hooks');
const hbs = exphbs.create({ 
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
       
    } });
// TEMPLATE ENGINE
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn

//--- routes init
route(app);

//
//HTTP logger
// app.use(morgan('combined'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
