// import mongoose from "mongoose";

// mongoose.connect('mongodb://localhost:27017/test', {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
//   });

//   const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => 
// {
//   console.log('Connected to MongoDB');
// });

// import mongoose from 'mongoose';

// let dbConnection
// let uri="mongodb+srv://chinmayasreeram:dhinchakpooja@users.yrk3gdl.mongodb.net/?retryWrites=true&w=majority&appName=Users";
// module.exports = 
// {
//   connectToDb: (cb) => {
//     MongoClient.connect(uri)
//       .then(client => {
//         dbConnection = client.db()
//         return cb()
//       })
//       .catch(err => {
//         console.log(err)
//         return cb(err)
//       })
//   },
//   getDb: () => dbConnection
// }