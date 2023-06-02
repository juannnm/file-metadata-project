import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import storage from './middleware/folderGetter.js';
import imgModel from "./db/models/imageModel.js";

dotenv.config();

const upload = multer({ storage: storage });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  let type = req.file.mimetype;
  let folder = mimetype[type];

  switch (folder) {
    case "uploads/texts": 
      textSchema.create(obj)
      .then ((err, item) => {
        if(err) {
          console.log(err)
        } else {
          item.save;
          res.redirect("/")
        }
      });
    break;

    case "uploads/images": 
      imgModel.create(obj)
      .then ((err) => {
        if(err) {
          console.log(err)
        } else {
          item.save;
          res.redirect("/")
        }
      });
    break;

    case "uploads/others": 
      otherSchema.create(obj)
      .then ((err) => {
        if(err) {
          console.log(err)
        } else {
          item.save;
          res.redirect("/")
        }
      })
  }
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
