const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://guru:Hq8WyQamTM3ugtXO@cluster0-4sldr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
client.connect(err => {
const collection = client.db("Restaurants").collection("restaurants");
console.log("connect");
//  let ins={que:'what is your first name?'};
//  collection.insertOne(ins,function(err,res){
//    console.log("inserted");
//  });
//  let show=collection.find({});
//  console.log(show);
// perform actions on the collection object
console.log(collection);
client.close();
})