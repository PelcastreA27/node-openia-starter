import express from "express";
import dotenv from "dotenv";
import chatRoutes from "../src/routes/chat.routes";


dotenv.config();

const app = express();
app.use(express.json());

app.use("api/chat", chatRoutes);

export default app;
