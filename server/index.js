// import express
const express = require("express");
// import cors
const cors = require('cors');

// setting express
const app = express();

// port config
const port = process.env.PORT || 4000;

// import routing
const router = require("./router");

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// implement cors
app.use(cors());

app.use(router);

app.listen(port, () => console.log(`Server menyala pada port ${port}, url: http://localhost:${port}`));