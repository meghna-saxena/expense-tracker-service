const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1); // connection/process will exit with failure, so app will shut down
  }
};

module.exports = connectDB;
