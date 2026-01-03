const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/medicalApp")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/appointments", appointmentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
