import mongoose from "mongoose";

const textSchema = new mongoose.Schema({
  name: String,
  date: Date,
  file: {
    data: Buffer,
    contentType: String
  }
})

const textModel = mongoose.model("Text", textSchema);

export default textModel;