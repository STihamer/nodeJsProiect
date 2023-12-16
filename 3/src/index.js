import express from "express";
const app = express();
let port = 3000;

let mongoConnectionUrl =
  "mongodb+srv://tihi:test@fsd74.9tvmapm.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());

app.listen(port, () => {
  console.log("App started on port " + port);
});
