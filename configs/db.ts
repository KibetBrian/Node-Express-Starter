import mongoose from 'mongoose';

let MONGO_URI: string;
const val = process.env.MONGO_URI
if (val) {
    MONGO_URI = val
} else {
    throw new Error("MONGO_URI undefined")
}

const ConnectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database Connected');
    } catch (e) {
        console.log(e)
    }
}

export default ConnectDb;