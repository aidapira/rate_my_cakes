const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  lastname: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  email: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  quantity: {
    type: Number,
    required: [true, '{PATH} is required'],
    min: [1, '{PATH} must be at least {MIN}'],
    max: [3, '{PATH} must be no more than {MAX}']
  },
  address: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  apartment: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  zipcode: {
    type: Number,
    required: [true, '{PATH} is required'],
    min: [2, '{PATH} must be at least {MIN}']
  },
  phone: {
    type: Number,
    required: [true, '{PATH} is required'],
    min: [2, '{PATH} must be at least {MIN}']
  },
  deliverydate: {
    type: String,
    required: [true, '{PATH} is required'],
  }
}, { timestamps: true });

mongoose.model('Order', OrderSchema);

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: [true, '{PATH} is required'],
    min: [1, '{PATH} must be at least {MIN}'],
    max: [5, '{PATH} must be no more than {MAX}'],
  },
  comment: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [10, '{PATH} must be at least {MINLENGTH} characters'],
  }
}, { timestamps: true });

mongoose.model('Review', ReviewSchema);


const CakeSchema = new mongoose.Schema({
  cakeName: {
    type: String,
    required: [true, '{PATH} is required'],
  },
  imgUrl: {
    type: String,
    required: [true, '{PATH} is required'],
  },
  price: {
    type: Number,
    required: [true, '{PATH} is required'],
  },
  reviews: {
    type: [ReviewSchema]
  },
  orders: {
    type: [OrderSchema]
  }
}, { timestamps: true });

mongoose.model('Cake', CakeSchema);
