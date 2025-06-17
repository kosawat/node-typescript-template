import express from "express";
import apiRoutes from "./routes";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/healthcheck", (req, res) => {
  res.send("Server is running!");
});

// Middleware
app.use(express.json());

// API Routes
app.use("/api", apiRoutes());

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

export default app; // This is the main entry point of the application.
