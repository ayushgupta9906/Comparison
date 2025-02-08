import * as dotenv from "dotenv";
dotenv.config()

// Connecting Database with the app

import dbConnect from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT || 8080;

// Route to display the port number
app.get("/", (req, res) => {
    res.send(`Server is running on port ${port}`);
});

dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`Application is working on port ${port}`);
    })
}).catch((error)=>{
    console.log("MONGODB connection failed");
})
