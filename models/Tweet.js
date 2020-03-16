const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tweet = mongoose.model("tweet", TweetSchema);
                                  // takes in the string of table name, followed by schema

// question1: the users is our association, the ref is refering to the string table name we assigned it?
//  Schema.Types.ObjectId I'm assuming is just the Id of that pojo, kinda like the id of a row
