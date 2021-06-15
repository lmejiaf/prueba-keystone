import mongoose from "mongoose";

const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const db = mongoose.connection;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log("Error on connect database -> ", err));

db.once("open", () => {
  console.log("Database is connected!", uri);
});

db.on("error", (err) => {
  console.log("An error has ocurred -> ", err);
});

export default db;