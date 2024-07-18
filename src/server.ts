import express from "express";
import bodyParser from "body-parser";
import eventRoutes from "./routes/eventRoutes";

const app = express();
const port = process.env.PORT || 7071;

app.use(bodyParser.json());

app.use("/events", eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
