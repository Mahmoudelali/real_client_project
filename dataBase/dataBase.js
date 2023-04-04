import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI).then(() => {
			console.log(`connected to database`);
		});
	} catch (error) {
		console.log(error.message);
	}
};

export default connectToDatabase;
