import mongoose from 'mongoose';
import connectToDb from './db';

describe('Database Connection Test', () => {
    
    it('Connects to the database', async() => {
        const mongooseConnectSpyOn = jest.spyOn(mongoose, 'connect').mockImplementationOnce(() => {
            return Promise.resolve({ connection: { host: 'localhost' } } as unknown as Promise<
              typeof import('mongoose')
            >);
          });
          const consoleInfoSpyOn = jest.spyOn(console, 'info');
          const dbConnection = await connectToDb('mongodb://127.0.0.1:27017/test');
          expect(mongoose.connect).toBeCalledTimes(1);
          expect(mongoose.connect).toBeCalledWith('mongodb://127.0.0.1:27017/test');
          expect(console.info).toBeCalledWith(`MongoDB connected: ${dbConnection?.connection.host}`);
          consoleInfoSpyOn.mockRestore();
          mongooseConnectSpyOn.mockRestore();  
        });
});