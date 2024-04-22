import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "DB Connected :",
      connectionInstance.connection.host,
      connectionInstance.connection.name
    );
  } catch (error) {
    console.log("Error while connecting with DB", error);
    process.exit(1);
  }
};
