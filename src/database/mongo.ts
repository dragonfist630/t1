import { Configs } from "@configs";
import mongoose from "mongoose";

const { user, password } = Configs.mongoDB;

// Mongodb Setup
const mongodbConnectionString = `mongodb+srv://${user}:${password}@rltrainbackend.mo6u8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongodbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, res => {
      if (res) {
        console.log("response => ", res);
      }
      console.log("MONGODB: Connection OK");
    });
  } catch (err) {
    console.log("MONGODB: Connection Error: ", err);
    process.exit(1);
  }
};

mongoConnect();
