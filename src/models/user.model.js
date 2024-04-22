import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  avatar: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});
