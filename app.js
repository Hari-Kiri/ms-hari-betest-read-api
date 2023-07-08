import express from 'express'

const app = express()
const port = 80

app.get('/read', (req, res) => {
  	res.send('Read service')
})

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})