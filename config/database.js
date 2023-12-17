import mongoose from "mongoose";

export const connectToDatabase = async () => {
   try {
      const { connection } = await mongoose.connect(process.env.MONGO_URI);
      console.log(`Database is connect with ${connection.host}`);
   } catch (error) {
      console.log(error);
   }
}