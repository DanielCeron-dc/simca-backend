import express from 'express';
import mongoose from 'mongoose'; 
import appRoute from './routes';
import {config} from './config/config';

const App = express();
App.use(express.json());
App.use(express.urlencoded({extended: true}));
App.use(appRoute);

mongoose.connect(config.db.uri).then(() => {
    console.log('Connected to MongoDB');
    App.listen(3000, () => {
        console.log('Server is running');
    });
}).catch(err => {
    console.log('Could not connect to MongoDB');
    console.log(err);
});


