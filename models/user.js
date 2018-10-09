const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    level: { type: Number, required: true },
    bio: { type: String },
    age: { type: Number, required: true },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    matchesWon: { type: Number, default: "" },
    matchesLost: { type: Number, default: "" },
    profilePic: { type: String, default: "" },
    date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;