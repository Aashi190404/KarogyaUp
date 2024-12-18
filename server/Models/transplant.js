const mongoose = require("mongoose");

const transplantSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  organ: { type: String, required: true },
  recipient: { type: String, required: true},
  location: { type: String, required: true },
  endDate: { type: String, required: true },
});

module.exports = mongoose.model("Transplant", transplantSchema);