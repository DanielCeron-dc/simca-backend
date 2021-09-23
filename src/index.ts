import express from 'express';
const App = express();

App.get('/', (req, res) => {
    // send a html  page with styles and scripts
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        background-color: rgba(100, 0, 0, 0.5);
                    }
                </style>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `);
});

//create a method post to the route /user
App.post('/user', (req, res) => {
    // send a json object with the name and age of the user
    res.json({
        name: 'John',
        age: 30
    });
});



App.listen(3000, () => {
    console.log('Server is running');
}
);