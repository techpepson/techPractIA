const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  patientID: {
    type: Number,
    required: [true, "Please enter a patient ID"],
  },
  surName: {
    type: String,
    required: true,
  },
  otherNames: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  residentialAddress: {
    type: Number,
  },
  emergencyName: {
    type: String,
  },
  relationshipWithPatient: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports.productModel = Product;
