const {MongoClient, ObjectID} = require('mongodb');

const connectionsURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'todo-list-database';

var id = new ObjectID();
// console.log(id);
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

        db.collection('users').findOne({name: 'ali'}, (err, user) => {
            if (err) {
                console.log('unable to read from MongoDB', err);
                return;
            } else{
                console.log(user);
            }
        });

        db.collection('users').find({age: 27}).toArray((err, user) => {
            if (err) {
                console.log('unable to read from MongoDB', err);
                return;
            } else{
                console.log(user);
            }
        });

        db.collection('users').updateOne({name: 'ali'},
        {
            $set:{
                name: 'ali_updated',
            }
        }).then((result) => {
            console.log('updated'+result);
        }).catch((err) => {
           console.log(err); 
        });

        db.collection('tasks').updateMany({status: 'In Progress'}, {
            $set:{
                status: 'Completed'
            }
        }).then((result) => {
            console.log('updated count'+result.modifiedCount);
        }).catch((err) => {
           console.log(err); 
        });


        db.collection('users').deleteOne({age: 27}).then((result) => {
            console.log('deleted'+result);
        }).catch((err) => {
           console.log(err); 
        });
    }
});