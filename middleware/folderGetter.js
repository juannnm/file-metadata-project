import multer from "multer";
import mimetype from "./mimetypes.js";

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let type = file.mimetype;
    let folder = mimetype[type];

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export default storage;