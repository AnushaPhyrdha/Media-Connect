const mongoose = require("mongoose");

const UserSchema =  mongoose.Schema({
    name: {type: "string", require: true},
    email: {type: "string", unique: true, require: true},
    password: {type: "string", require: true}
});

const EndUser = mongoose.model("EndUser", UserSchema);

module.exports = EndUser;