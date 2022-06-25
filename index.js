const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

const {
   ServerResponse
} = require("http");
const http = require("http").createServer(app);
const flights = require("./controllers/flightController");
const models = require("./models/flight");
const routes = require("./routes/flightRoute");
const port = process.env.PORT || 3000;
ServerResponse


//add/book flight
const flightDetails = {
   title: 'flight to canada',
   time: '1pm',
   price: 26000,
   date: '26-06-2022'
}

function flightdata() {
   return flightDetails;
};
flightdata();

app.use(express.json());

app.use("/", routes);

app.use("/", flights);

app.use("/", models)

app.get("/", (req, res) => {
  res.json('Hello World')
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
