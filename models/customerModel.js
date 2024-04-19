const mongoose = require("mongoose");

const customerModel = new mongoose.Schema({
  customerId: { type: String },
  customerName: { type: String },
  customerEmail: { type: String },
  customerPassword: { type: String },
  billingAddress: {
    street: { type: String },
    city: { type: String },
    zip: { type: String },
    country: { type: String },
  },
});

const customer = mongoose.model("customer", customerModel);
module.exports = customer;
