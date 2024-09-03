import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import productsRouter from "./routes/products.route"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/products', productsRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})