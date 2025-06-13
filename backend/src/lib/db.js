import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_CLUSTER,
      MONGO_DB_NAME,
      MONGO_APP_NAME,
    } = process.env;

    const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=${MONGO_APP_NAME}`;

    const conn = await mongoose.connect(uri);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};
