import { Schema } from "mongoose"

const UserData = () => {
    let schema = new Schema ({
        id: {
            type: String,
            unique: true,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        accountNumber: {
            type: Number,
            unique: true,
            required: true
        },
        emailAddress: {
            type: String,
            unique: true,
            required: true
        },
        identityNumber: {
            type: Number,
            unique: true,
            required: true
        }
    })
    schema.index({
        id: 1
    })
    return schema
}

export default UserData