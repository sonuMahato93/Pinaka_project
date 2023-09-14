const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "name is require"],
  },
  lastname: {
    type: String, 
  },
 

});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
