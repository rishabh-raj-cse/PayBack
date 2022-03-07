const mongoose = require('mongoose');

const connection = {}
const MONGO_URL = `mongodb+srv://admin:oYWfvRofYWICyMMJ@cluster0.lrhed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDatabase = async () => {
    if (connection.isConnected) {
        return connection;
    }
    try {
        const Onconnection = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        );
        connection.isConnected = Onconnection.connections[0].readyState;
        console.log('MongoDB connected');

    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDatabase;


