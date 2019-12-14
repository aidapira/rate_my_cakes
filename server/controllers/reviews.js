const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Review = mongoose.model('Review');


module.exports = {
  create(request, response) {
    Cake.findByIdAndUpdate(
      request.params.cakeId,
      {
        $push: {
          reviews: new Review(request.body)
        }
      },
      {
        // new true means return the updated cake instead of old cake
        runValidators: true, new: true}
    )
    .then((updatedCake) => {
      response.json({ cake: updatedCake });
    })
    .catch((errors) => {
      response.json({ errors: errors });
    });
  }
}
