import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected '))
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`)
    } catch (error) {
        console.log('Error to connect:', error)
    }
}

export default connectDB;