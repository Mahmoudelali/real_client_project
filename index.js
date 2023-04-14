import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectToDatabase from './dataBase/dataBase.js';
import userRouter from './routes/userRouter.js';
import orderRouter from './routes/orderRouter.js';
import social_mediaRouter from './routes/social_mediaRouter.js';
import profitRouter from './routes/profitRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import subCategoryRouter from './routes/sub_categoryRouter.js';


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

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`,
	),
);

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/products', productRouter);
app.get('/', (req, res) => {
	res.send('API is running...');
});

app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`,
	),
);

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/products', productRouter);
app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`)
);

app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/products", productRouter);
app.use("/socialmedia", social_mediaRouter);
app.use("/profit", profitRouter);
app.use("/websitesetting", websiteSettingRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
