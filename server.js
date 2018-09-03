const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var profile = require('./profile');//does this go here?

const app = express();
let person;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/profile', profile);//does this go here?

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
      person: {
        firstName: 'James',
        lastName: 'Arakaki',
      }
    }
    
    app.get('/contact', (req, res) => {
        res.render('contact');
    });
    
    app.post('/thanks', (req, res) => {
        res.render('thanks', { contact: req.body })
    });
    
    // Notice now the data is the second argument passed to the template render method
    res.render('index', data);
  });

app.listen(8080, () => {
    console.log('listening at http://localhost:8080')
});