const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Database connected");
  });
} catch (error) {
  console.log(`Error encountered at mongodb connection: ${error}`);
}
