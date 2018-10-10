const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
        if( err ) {
            console.log('could not connect to mongodb server');
            return;
        }
        console.log('connected to mongodb server!');
        const db = client.db('TodoApp');

        db.collection('Users').find({name: 'rajpal'}).toArray().then( (docs) => {
                console.log(JSON.stringify(docs, undefined, 2));
        }, (err) =>{
            console.log('unable to fetch users', err);
        });

        //client.close();
});

