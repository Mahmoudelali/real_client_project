import express from 'express';
const app = express();

import dotenv from 'dotenv';

import cors from 'cors';
dotenv.config();

import connectToDatabase from './dataBase/dataBase.js';
connectToDatabase();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
