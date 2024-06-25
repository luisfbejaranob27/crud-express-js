console.clear()
const express = require('express')
const dotenv = require('dotenv')
const { StatusCodes } = require('http-status-codes')

const v1UserRouter = require('./v1/routes/UserRouter')
const v2UserRouter = require('./v2/routes/UserRouter')

dotenv.config()

const app = express()
app.disable('x-powered-by')
const port = process.env.PORT || 8627

app.use(express.json())
app.use('/api/v1', v1UserRouter)
app.use('/api/v2', v2UserRouter)

app.use((req, res) => {
  res.status(StatusCodes.NOT_FOUND).send({ error: 'Path not found 💥' })
})

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port} 🚀`)
})
