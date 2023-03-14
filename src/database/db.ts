import { connect } from 'mongoose';

const connectToDb = async (connectionString: string)=>{
    try {
        const dbConnection = await connect(connectionString);
        console.info(`MongoDB connected: ${dbConnection.connection.host}`);
        return dbConnection;
      } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
      }
}

export default connectToDb;