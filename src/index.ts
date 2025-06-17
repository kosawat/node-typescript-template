import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/healthcheck", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});

export default app; // This is the main entry point of the application.
