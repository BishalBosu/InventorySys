const path = require("path")
const express = require("express")

const bodyParser = require("body-parser")

const sequelize = require("./util/database")

const mainRoutes = require("./routes/main")

const cors = require("cors")

const app = express()

app.use(cors())

app.use(bodyParser.json({ extended: false }))

app.use(mainRoutes)


sequelize
	.sync()
	.then((result) => {
		app.listen(3003)
	})
	.catch((err) => console.log(err))


