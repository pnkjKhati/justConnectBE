import "dotenv/config";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() =>
    app.listen(process.env.PORT || 8001, () => {
      console.log(`server is runningg on port: ${process.env.PORT || 8001}`);
    })
  )
  .catch((error) => {
    console.log("Mongo DB connection Failed!!", error);
  });
