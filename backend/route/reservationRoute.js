
import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

// POST http://localhost:5000/api/v1/reservation/send
router.post("/send", send_reservation);

export default router;
