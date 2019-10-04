const express =require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://guru:SIDejD1WzBnhpsC8@cluster0-4sldr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true }, { useNewUrlParser: true });
const app = express();
const port = 3000;
const cors=require('cors');
client.connect(err => {
const col = client.db("quiz-temp").collection('questionstemp');
console.log("connect");
if (err)
return console.log(err);
app.use(cors());
require('./rout')(app, col);
app.listen(port, () => {
console.log("Port 3000 running on browser...");
});
client.close()});