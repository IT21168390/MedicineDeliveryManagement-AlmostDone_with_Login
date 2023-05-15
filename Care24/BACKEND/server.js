const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors'); // React Package for Frontend to deal with Backend.
const pdf = require('html-pdf');
const dotenv = require("dotenv");
require("dotenv").config();

const userController  = require('./routes/UsersController');


const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
  

//import routes
const MedicineRequestRoutes = require("./routes/MedicineDeliveryManagement/MedicineRequests");
const DeliveryStageRoute = require("./routes/MedicineDeliveryManagement/DeliveryProcess");

//const FileUpRoute = require("./routes/NewMediReqwithFile");


//app middleware
app.use(bodyParser.json());
//app.use(cors());
//  POST http://localhost:4500/newmedicinerequestWithFile/create net::ERR_FAILED 413 (Payload Too Large)
app.use(cors({
    origin: "http://localhost:3000",
  }));
  

//route middleware
app.use(MedicineRequestRoutes);
app.use(DeliveryStageRoute);

//app.use(FileUpRoute);



app.post('/signup', userController.signup)
app.post('/signin', userController.signin)
app.get('/getUsers', userController.GetUsers)

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_DB_Connection)
.then(()=>{
    console.log("Mongoose connected.");
    app.listen(PORT, ()=> {
        console.log(`Server is Running on Port ${PORT}`);
    });
});
const connection = mongoose.connection;