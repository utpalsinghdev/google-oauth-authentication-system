import { Router } from "express";
import { healthCheck } from "./test.controller";



const router = Router();


router.get("/health", healthCheck); // This is the health check route for the test router

router.get("/", (req, res) => { // This is the default route for the test router
    res.send("Hello World!");
});

export default router;