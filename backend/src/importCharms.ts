import mongoose from "mongoose";
import Charm from "./models/charm"; // Adjust path if necessary
import dotenv from "dotenv";
import { CharmList } from "../src/utils/charmInfo";

dotenv.config();

const importData = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(process.env.MONGO_URL);
    // Clear existing Charm data (optional)
    await Charm.deleteMany({});

    // Insert new data
    const charms = CharmList();
    await Charm.insertMany(charms);

    console.log("Data Imported Successfully");
  } catch (error) {
    console.error("Error importing data:", error);
  } finally {
    mongoose.connection.close();
  }
};

importData();
