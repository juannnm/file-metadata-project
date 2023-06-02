import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  name: String name,
  date: Date,
  file: {
    data: Buffer,
    contentType: String,
  }
});

const imgModel = mongoose.model("Image", imageSchema);

export defaul imgModel;