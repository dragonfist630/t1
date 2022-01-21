import mongoose from "mongoose";

const trainSchema = new mongoose.Schema(
  {
    train_no: String,
    train_name: String,
    source: String,
    destination: String,
    fare: Number,
    availability: String
  },
  { timestamps: true }
);
// const userSchema = new mongoose.Schema(
//   {
//     username: String,
//     password:String,
//   },
//   { timestamps: true }
// );
export const trainModel = mongoose.model("train", trainSchema);
//model(name of schema,created_schema);
// export const userSchema = mongoose.model("train", userSchema);