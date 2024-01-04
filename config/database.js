import mongoose from "mongoose";

export const connectToDatabase = async () => {
   try {
      const { connection } = await mongoose.connect("mongodb+srv://nextjs13:nextjs13@inotebook.ukflwtj.mongodb.net/GoogleLogin");
      console.log(`Database is connect with ${connection.host}`);
   } catch (error) {
      console.log(error);
   }
}