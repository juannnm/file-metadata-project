import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  name: String,
  date: Date,
  file: {
    data: Buffer,
    contentType: String,
  }
});

const imgModel = mongoose.model("Image", imageSchema);

export default imgModel;