import mongoose from 'mongoose'

const DisconnectFromDatabase = () => {
    mongoose.connection.close()
}

export default DisconnectFromDatabase