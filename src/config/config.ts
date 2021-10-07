//export a configuration object for mongodb connection
export const config = {
    db: {
        uri: process.env.DB_URI || 'mongodb+srv://damusan:desceron1427@cluster0.dpij2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        options: {
            user: '',
            pass: ''
        },
        // Enable mongoose debug mode
        debug: process.env.MONGODB_DEBUG || false
    },
    port: process.env.PORT || 5000,
    app: {
        title: 'Simca - backend'
    }
};
