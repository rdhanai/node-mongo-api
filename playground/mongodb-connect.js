const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
        if( err ) {
            console.log('could not connect to mongodb server');
            return;
        }
        console.log('connected to mongodb server!');
        const db = client.db('TodoApp');
    
        // db.collection('Todos').insertOne({
        // }, (err, result) => {
        //     if( err) {
        //         console.log('unable to insert Todos');   
        //         return;
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // })

        db.collection('Users').insertOne({
            name: 'rajpal',
            age: 43,
            location: 'c-402, Stellar MI Legacy, Zeta 1, Gr Noida'
        }, (err, result) => {
            if( err) {
                console.log('unable to insert Users');   
                return;
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        })

        client.close();
});

