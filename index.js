import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import storage from './middleware/folderGetter.js';
import imgModel from "./db/models/imagesModel.js";
import textModel from "./db/models/textModel.js";
import othersModel from "./db/models/othersModel.js";

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

  let obj = {
    name: req.file.originalname,
    date: Date.now,
    file: {
      data: fs.readFileSync(_dirname + "/uploads/" + folder + req.file.filename),
      contentType: type
    }
  }
  
  switch (folder) {
    case "uploads/texts": 
      textModel.create(obj)
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
      othersModel.create(obj)
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
