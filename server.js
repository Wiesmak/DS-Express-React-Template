// @ts-check
import express from 'express'
import {fileURLToPath} from "url"
import path from "path"
// routes

// express app
const app = express()
const PORT = 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// express config
app.use(express.static(path.join(__dirname, 'static')))

// routes
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
})
