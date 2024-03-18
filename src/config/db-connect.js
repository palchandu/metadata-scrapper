import mongoose from 'mongoose';
const  MONGO_URI  = process.env.MONGO_URI;
export default async function connect() {
	try {
		await mongoose.connect(MONGO_URI);
		console.log('Connected to MongoDB');
	} catch (error) {
		console.log("Error in connecting to database",error)
		process.exit(1);
	}
}