import express from 'express';
import mongoose from 'mongoose'; 

const App = express();

mongoose.connect('mongodb://localhost/test').then(() => {
    console.log('Connected to MongoDB');
    App.listen(3000, () => {
        console.log('Server is running');
    });
}).catch(err => {
    console.log('Could not connect to MongoDB');
    console.log(err);
});


