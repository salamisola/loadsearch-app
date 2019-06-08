const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loadSchema = new Schema({
  origin: { type: String, required: true },
  radius: { type: Number, required: true },
  destination: { type: String, required: true },
  equipment: { type: String, required: true },
  rate: { type: Number, required: true },
  ratepermile: { type: Number, required: true },
  distance: { type: Number, required: true },
});

const Load = mongoose.model("Load", loadSchema);

module.exports = Load;
