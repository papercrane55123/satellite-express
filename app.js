const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

router.get('/artists/:id', function (req, res) {
	console.log("id는 " + req.params.id + " 입니다.")
	res.send("id : " + req.params.id)
});

router.get('/artists/:id/company/:company', function (req, res) {
        res.send("id : " + req.params.id + " 회사 : " + req.params.company)
});

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
