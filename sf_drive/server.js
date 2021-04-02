const express = require('express');
const multer = require('multer');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const fs = require('fs');
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')



const app = express();

app.use(bodyParser.urlencoded({extended: true}));

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,  ()=> console.log('Database connected'))


app.use(fileUpload());

app.use(express.json())


app.post('/upload', (req, res) => {

    if (req.files === null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;
    const fileName = Date.now() + '-' +file.name;
    
    file.mv(`${__dirname}/client/public/uploads/${fileName}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
      
  });
});

app.delete('/', (req, res)=> {
  res.send('I have recieved your DELETE request');
 
});

app.use('/uploads', express.static('uploads'));

app.use(cors())
app.use('/app', routesUrls)
app.listen(5000, () => console.log('Server Started...'));