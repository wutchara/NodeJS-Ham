const express = require('express')
const app = express()
const port = 3000
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

app.get('/time',async (req, res) => {
	const data = new Date()
	console.log('Access time endpoint', data);
	return await sleep(15000).then(() => {
  		return res.send('Response delay Ja.'+ data)
	})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))