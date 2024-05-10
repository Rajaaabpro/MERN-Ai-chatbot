// import express from "express";

// const app = express();

// //  GET-
// //  PUT-
// //  POST-
// //  DELETE-

// app.use(express.json());

// app.delete("/user/:userid", (req, res, next) => { 
//     console.log(req.params.userid );
//     return res.send("Hello");
// });

// app.listen(5000, () => console.log("Server Open"));



// import express from "express";
// import { config } from "dotenv";
// config();
// const app = express();
// //middlewares
// app.use(express.json());




// import { connect } from "http2";
// import { error } from "console";
// import app from "./app.js";
// import { connectToDatabase } from "./db/connections.js";


// // connections and listhres
// connectToDatabase().then(() => { 
//     app.listen(5000, () => console.log("Server Open & Connected To Database 👌")); 

// })
// .catch((err) => console.log(err));


import { error } from "console";
import app from "./app.js"; // Correct import path
import { connectToDatabase } from "./db/connections.js";

// connections and listen
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
        console.log("Server Open & Connected To Database 👌"));
  })
  .catch((err) => console.log(err));



