//import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/btp-college-local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//Data Parsing
app.use(express.json());
app.use(express.urlencoded({extended:false})); /// set true for very deep nested objects <---IMPORTANT--->


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
 
 
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// "proxy":"http://localhost:8080"   -------  Very important add this in last of package.json of CLIENT 