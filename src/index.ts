import express from 'express';
import mongoose from 'mongoose'; 
import appRoute from './routes';
import {config} from './config/config';
import path from 'path';

const App = express();
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
console.log(path.join(__dirname, 'public'));

App.use(express.static(path.join(__dirname, 'public')));
App.use(appRoute);

mongoose.connect(config.db.uri).then(() => {
    console.log('Connected to MongoDB');
    App.listen(config.port, () => {
        console.log('Server is running');
    });
}).catch(err => {
    console.log('Could not connect to MongoDB');
    console.log(err);
});