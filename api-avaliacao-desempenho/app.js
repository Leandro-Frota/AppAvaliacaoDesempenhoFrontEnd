import express from "express"

const app = express()

app.use(express.json());

const PORT = 3001

app.get('/',(req,res)=>{
    res.send("Olá mundo")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}` )
})

