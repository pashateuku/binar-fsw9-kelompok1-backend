const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const router = require("./router");

app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Server nyala di port ${port}, Listening on http://localhost:${port}`));