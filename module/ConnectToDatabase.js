import mongoose from 'mongoose'

const ConnectToDatabase = (connectionUrl) => {
    mongoose.connect(connectionUrl).then(() => {
        console.info(`Database connected to ${connectionUrl}`)
    }).catch((error) => {
        console.log(`Database not Connected, error: ${error}`)
    })
}

export default ConnectToDatabase