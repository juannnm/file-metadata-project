import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  name: String name,
  date: Date.now,
  img: {
    data: Buffer,
    contentType: String,
  }
});

const imgModel = mongoose.model("Image", imageSchema);

export defaul imgModel;