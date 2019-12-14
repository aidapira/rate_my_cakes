const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');

module.exports = {
  all(request, response) {
    // find all
    Cake.find()
      .then((cakes) => {
        response.json({ cakes: cakes });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },
  create(request, response) {
    // create a cake
    Cake.create(request.body)
      .then((newCake) => {
        response.json({ cake: newCake });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Cake.findById(request.params.id)
    .then((cake) => {
      response.json({ cake: cake });
    })
    .catch((errors) => {
      response.json({ errors: errors });
    });
  }

}
