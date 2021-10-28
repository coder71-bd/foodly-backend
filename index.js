require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

//connetion URI of mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pcmtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//create a new mongo client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect(); // connect to mongodb.

    const database = client.db('foodly'); //NAME OF THE DATABASE

    // COLLECTIONS UNDER DATABASE
    const foodsCollection = database.collection('foods');
    const orderCollection = database.collection('order');

    // (READ) --> GET ALL FOODS FROM DATABASE
    app.get('/', async (req, res) => {
      const query = {}; // find all foods

      //find in foods collection
      const cursor = foodsCollection.find(query);
      const users = await cursor.toArray();

      res.json(users); // send the foods to client side.
    });

    // (READ) --> GET A SINGLE FOOD INFO FROM DATABASE
    app.get('/food/:id', async (req, res) => {
      const id = req.params.id;

      const query = { _id: ObjectId(id) }; // query for single food

      const food = await foodsCollection.findOne(query); // find the single food

      res.json(food); // send the food to client side.
    });

    // (READ) --> GET ALL THE ORDER INFO
    app.get('/order', async (req, res) => {
      const query = {}; // find all orders

      //find in order collection
      const cursor = orderCollection.find(query);
      const users = await cursor.toArray();

      res.json(users); // send the orders to client side.
    });

    // (CREATE) --> CREATE ALL THE ORDER INFO IN DATABASE
    app.post('/order', async (req, res) => {
      const newOrder = req.body; // order info

      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const order_time = new Date().toLocaleString('en-US', options);

      // insert the order info in order collection
      const result = await orderCollection.insertOne({
        ...newOrder,
        order_time,
        staus: 'pending',
      });

      res.json(result); // response after adding order info to the database
    });
  } finally {
    //await client.close();
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log('The server is running on port', port);
});
