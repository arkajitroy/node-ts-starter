import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import { LOCAL_SERVER_PORT } from "./config/config";
import dotenv from "dotenv";

// Constants
const app = express();
dotenv.config();

// middlewares
app.use(cors({ credentials: true }));
app.use(compression());
app.use(bodyParser.json());

// Server Running
app.listen(LOCAL_SERVER_PORT, () => {
  console.log("The Backend Server is running @PORT", LOCAL_SERVER_PORT);
});
