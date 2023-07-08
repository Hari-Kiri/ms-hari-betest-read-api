import express from 'express'
import ConnectToDatabase from './module/ConnectToDatabase.js'
import DisconnectFromDatabase from './module/DisconnectFromDatabase.js'
import UserDataModel from './model/UserData.js'
import DeleteModel from './module/DeleteModel.js'
import { model } from 'mongoose'

const app = express()

app.get('/read', (request, response) => {

	ConnectToDatabase(process.env.DATABASE_CONNECTION_URL)

	if (request.query.accountNumber !== undefined) {
		const userData = model("userdata", UserDataModel())
		userData.find({accountNumber: request.query.accountNumber}).then((result) => {
			response.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify({
				code: 200,
				response: true,
				message: result
			}))
			console.log("get user data by accountNumber success")
		}).catch((error) => {
			response.writeHead(404, {'Content-Type': 'application/json'}).end(JSON.stringify({
				code: 404,
				response: false,
				message: "failed get user data"
			}))
			console.log(`get user data by accountNumber failed: ${error}`)
		}).finally(() => {
			DeleteModel("userdata")
			DisconnectFromDatabase()
			console.log("database disconnected and connection model deleted")
		})
		return
	}
	if (request.query.identityNumber !== undefined) {
		const userData = model("userdata", UserDataModel())
		userData.find({identityNumber: request.query.identityNumber}).then((result) => {
			response.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify({
				code: 200,
				response: true,
				message: result
			}))
			console.log("get user data by identityNumber success")
		}).catch((error) => {
			response.writeHead(404, {'Content-Type': 'application/json'}).end(JSON.stringify({
				code: 404,
				response: false,
				message: "failed get user data"
			}))
			console.log(`get user data by identityNumber failed: ${error}`)
		}).finally(() => {
			DeleteModel("userdata")
			DisconnectFromDatabase()
			console.log("database disconnected and connection model deleted")
		})
		return
	}

	const userData = model("userdata", UserDataModel())
	userData.find({}).then((result) => {
		response.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify({
			code: 200,
			response: true,
			message: result
		}))
		console.log("get user data success")
	}).catch((error) => {
		response.writeHead(404, {'Content-Type': 'application/json'}).end(JSON.stringify({
			code: 404,
			response: false,
			message: "failed get user data"
		}))
		console.log(`get user data failed: ${error}`)
	}).finally(() => {
		DeleteModel("userdata")
		DisconnectFromDatabase()
		console.log("database disconnected and connection model deleted")
	})

})

app.listen(process.env.HTTP_PORT, () => {
  	console.log(`Example app listening on port ${process.env.HTTP_PORT}`)
})