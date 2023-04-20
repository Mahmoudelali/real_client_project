
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectToDatabase from "./dataBase/dataBase.js";
import userRouter from "./routes/userRouter.js";
import orderRouter from "./routes/orderRouter.js";
import socialMediaRouter from "./routes/socialMediaRouter.js";
import profitRouter from "./routes/profitRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import subCategoryRouter from "./routes/subCategoryRouter.js";
import productRouter from "./routes/productRouter.js";
import websiteSettingRouter from "./routes/websiteSettingRouter.js";
import instructionRouter from "./routes/instructionRouter.js";


dotenv.config();

connectToDatabase();

const PORT = process.env.PORT || 3000;

const app = new express();


if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));


app.listen(
	PORT,
	console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`)
);

app.get("/", (req, res) => {
	res.send("API is running...");
});
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/products", productRouter);
app.use("/socialmedia", socialMediaRouter);
app.use("/profit", profitRouter);
app.use("/websitesetting", websiteSettingRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/instruction", instructionRouter);

