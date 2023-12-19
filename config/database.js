import mongoose from "mongoose";

export const connectToDatabase = async () => {
   try {
      const { connection } = await mongoose.connect("mongodb://localhost:27017/mbaBurgerWalaNEw");
      console.log(`Database is connect with ${connection.host}`);
   } catch (error) {
      console.log(error);
   }
}