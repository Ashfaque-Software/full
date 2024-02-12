const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Set the 'strictQuery' option to false to suppress the deprecation warning
mongoose.set('strictQuery', false);

// Connect to MongoDB using the URI from the environment variables
const mongoURL = process.env.mongoURL;

const Connect = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Propagate the error
  }
};

module.exports = Connect;
