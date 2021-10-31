<h1 align="center">Foodly Server side</h1>

<div>
see the Client side implemented through this backend: <a href="https://foodly-e4c7f.web.app">live demo</a>
</div>
<p>
Base URL of food item <a href="https://infinite-woodland-69947.herokuapp.com/">food item</a>
</p>
<p>
Base URL of order <a href="https://infinite-woodland-69947.herokuapp.com/order">order</a>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Built With](#built-with)
- [Features](#features)
- [API](#API)
- [Contact](#contact)

### Built With

- Node
- Express
- Mongodb
- cors
- dotenv
- nodemon

## Features

This node project is the backend of <a href="https://foodly-e4c7f.web.app">Foodly</a>. I have implemented CRUD operation through this node project. Please Look at below to see the use of API endpoints. The above example are given using axios.

## API

<h3 align="center">READ MEHTODS OF CRUD</h3>
<div>
<p>Get all food from database</p>
    <code>
        axios.get('https://infinite-woodland-69947.herokuapp.com/').then((response) => console.log(response.data));
    </code>
</div>

<div>
<p>Get a single food info from database</p>
    <code>
        axios.get(`https://infinite-woodland-69947.herokuapp.com/food/${id}`).then((response) => console.log(response.data));
    </code>
</div>

<div>
<p>Get all the order info from database</p>
    <code>
        axios.get('https://infinite-woodland-69947.herokuapp.com/order').then((response) => console.log(response.data));
    </code>
</div>

<div>
<p>Get a specific user order</p>
    <code>
        axios.get(`https://infinite-woodland-69947.herokuapp.com/order/${email}`).then((response) => console.log(response.data));
    </code>
</div>

<h3 align="center">CREATE METHODS OF CRUD</h3>
<div>
<p>Create an order in database</p>
    <code>
        axios.post('https://infinite-woodland-69947.herokuapp.com/order', orderInfoObject).then((response) => console.log(response.data));
    </code>
</div>

<div>
<p>Create a food item in database</p>
    <code>
        axios.post('https://infinite-woodland-69947.herokuapp.com/food', foodInfoObject).then((response) => console.log(response.data));
    </code>
</div>

<h3 align="center">UPDATE MEHTODS OF CRUD</h3>
<div>
<p>Update an order status</p>
    <code>
        axios.put(`https://infinite-woodland-69947.herokuapp.com/order/${id}`).then((response) => console.log(response.data));
    </code>
</div>

<h3 align="center">DELETE MEHTODS OF CRUD</h3>
<div>
<p>Delete an order</p>
    <code>
        axios.delete(`https://infinite-woodland-69947.herokuapp.com/order/${id}`).then((response) => console.log(response.data));
    </code>
</div>

## Contact

- GitHub [@coder71-bd](https://github.com/coder71-bd)
