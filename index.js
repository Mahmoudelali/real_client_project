import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDatabase from "./dataBase/dataBase.js";
import orderRouter from "./routes/orderRouter.js"

dotenv.config();

connectToDatabase();

const PORT = process.env.PORT || 5000;

const app = new express();

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.send("API is running...");
});
app.use('api/order', orderRouter)

app.listen(
	PORT,
	console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`)
);

app.use("/user", userRouter);