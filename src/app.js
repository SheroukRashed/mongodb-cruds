const {MongoClient, ObjectID} = require('mongodb');

const connectionsURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'todo-list-database';

var id = new ObjectID();
console.log(id);
MongoClient.connect(connectionsURL, {'useNewUrlParser': true}, (err, client) => {
    if (err) {
        console.log('unable to connect to MongoDB', err);
        return;
    } else{
        const db = client.db(databaseName);
        // db.collection('users').insertOne({
        //     id: 1,
        //     name: 'sherouk',
        // },(err, result) => {
        //     if (err) {
        //         console.log('unable to insert to MongoDB', err);
        //         return;
        //     } else{
        //         console.log(result.ops);
        //     }
        // });

        // db.collection('tasks').insertMany([
        //     {
        //         title: 'study node.js',
        //         description: 'this means to create a repo and push updats',
        //         tags: ['Courses', 'Coding'],
        //         status: 'In Progress'
        //     },
        //     {
        //         title: 'Cook Food',
        //         description: 'this means to buy meals and start cooking them',
        //         tags: ['House Work'],
        //         status: 'Completed'
        //     }
        // ],(error, result) => {
        //     if (error) {
        //         console.log('unable to insert to MongoDB', error);
        //         return;
        //     } else{
        //         console.log(result.insertedIds);
        //     }
        // });
    }
});