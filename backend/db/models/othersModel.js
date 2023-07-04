import mongoose from "mongoose";

const othersSchema = new mongoose.Schema({
  name: String,
  date: Date,
  file: {
    data: Buffer,
    contentType: String,
  }
})

const othersModel = mongoose.model("Other", othersSchema);

export default othersModel;