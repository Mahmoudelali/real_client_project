import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./dataBase/dataBase.js";
import orderRouter from "./routes/orderRouter.js"

const app = express();

dotenv.config();

connectToDatabase();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use('api/order', orderRouter)

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
