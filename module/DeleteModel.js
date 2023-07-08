import mongoose from "mongoose"

const DeleteModel = (modelName) => {
    mongoose.deleteModel(modelName)
}

export default DeleteModel