const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  room_id: {
    type: String,
    min: 4,
    required: true,
  },
  host_name: {
    type: String,
    min: 3,
    required: true,
  },
  room_name: {
    type: String,
    min: 4,
    required: true,
  },
  password: {
    type: String,
    min: [6, "Please choose more secure password atleast 6 characters."],
    required: true,
  },
  no_of_players: {
    type: Number,
    required: true,
    default: 1,
    validate(value) {
      if (value < 0) throw new Error("No of players cannot be negative.");
    },
  },
  room_rules: {
    type: String,
    max: 300,
    required: false,
  },
});

const roomInfo = mongoose.model("roomData", RoomSchema);

module.exports = roomInfo;