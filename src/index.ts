import express from "express";
import apiRoutes from "./routes";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/healthcheck", (req, res) => {
  res.send("Server is running!");
});

app.use(express.json());

app.use("/api", apiRoutes());

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

export default app; // This is the main entry point of the application.
