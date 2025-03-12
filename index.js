import "dotenv/config.js";

import express from "express";
import { db } from "./db/db.js";
const app = express();
import userRoute from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 3000;



// 
app.use(express.json())
app.use(cookieParser())




app.use("/api/user",userRoute)

db().then(() => {
  app.listen(PORT, () => {
    console.log(`server is started ${PORT}`);
  });
});
