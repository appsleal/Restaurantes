import { connect } from 'mongoose';

const connectToDb = async (connectionString: string)=>{
    try {
        const dbConnection = await connect(connectionString);
        console.info(`MongoDB connected: ${dbConnection.connection.host}`);
        return dbConnection;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error) {
        console.error(`MongoDB connection error: ${error}`);
      }
}

export default connectToDb;