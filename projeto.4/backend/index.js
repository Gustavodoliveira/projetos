const express = require("express") ;
const cors = require("cors") ;


const app = express();
const port = 5000;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors({credentials: true, origin: "http://localhost:3000"}));




const UserRoutes = require("./routes/UserRoutes")
const ProductRoutes = require("./routes/ProductsRoutes")

app.use("/", UserRoutes)

app.use("/products", ProductRoutes)

app.listen(port, () => {
   console.log("O servidor iniciou");
})