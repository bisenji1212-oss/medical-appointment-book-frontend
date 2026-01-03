const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Book appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to book appointment" });
  }
});

// Get all appointments (Admin use)
router.get("/", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

module.exports = router;
