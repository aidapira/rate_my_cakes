const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb+srv://aidapirahmadi:AidaPa1995@cluster0-pdrfb.mongodb.net/tulipbakery?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // for deprecation warning from .findByIdAndUpdate
  useFindAndModify: false
});

const modelsPath = path.join(__dirname, '../models');
// programmatically require all .js files that are in models folder
// sync rather than async
fs.readdirSync(modelsPath).forEach((file) => {
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});
