const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
        if( err ) {
            console.log('could not connect to mongodb server');
            return;
        }
        console.log('connected to mongodb server!');
        const db = client.db('TodoApp');

        db.collection('Users').deleteOne({name: 'alok'}).then( (result) => {
                console.log(JSON.stringify(result, undefined, 2));
        }, (err) =>{
            console.log('unable to delete user', err);
        });

        //client.close();
});

