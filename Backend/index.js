require("dotenv").config();

const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connect = require("./db/connection");

if (!(process.env.JWT_SECRET || process.env.JWT_SECRETE)) {
  console.error("FATAL: JWT secret is not set. Refusing to start.");
  process.exit(1);
}

// Comma separated list, e.g. CLIENT_ORIGINS=https://ankush.dev,http://localhost:5173
const allowedOrigins = (process.env.CLIENT_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

if (!allowedOrigins.length) {
  console.warn(
    "WARNING: CLIENT_ORIGINS is not set — allowing every origin. Set it in production."
  );
}

app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      // No allow-list configured, or a non-browser caller (curl, server-to-server).
      if (!allowedOrigins.length || !origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "100kb" }));
app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Backend working perfectly");
});

app.use((req, res) => {
  res.status(404).send({ isSuccess: false, data: null, message: "Route not found" });
});

// Last line of defence: never leak a stack trace to the client.
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).send({
    isSuccess: false,
    data: null,
    message: status === 500 ? "Something went wrong" : err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log(`server running at ${PORT}`);
});
